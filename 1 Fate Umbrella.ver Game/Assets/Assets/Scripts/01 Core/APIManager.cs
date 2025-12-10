using UnityEngine;
using UnityEngine.Networking;
using System.Collections;
using System;
using System.Collections.Generic; // Agregado para List<T>
using TMPro;

public class APIManager : MonoBehaviour
{
    public static APIManager Instancia;

    [Header("Configuración de Servidor")]
    public string apiUrlBase = "http://localhost:3001";
    public string endpointCarga = "/users/";
    public string idUsuarioPrueba = "2";

    [Header("Login POST")]
    public string endpointLogin = "/login";

    [Header("Transición de Escena")]
    public ControlTransicion controlTransicion;

    void Awake()
    {
        if (Instancia != null)
        {
            Destroy(gameObject);
            return;
        }
        Instancia = this;
    }

    void Start()
    {

    }

    public void IniciarCargaDeDatos(string idUsuario)
    {
        StopAllCoroutines();
        StartCoroutine(FetchPlayerData(idUsuario));
    }

    IEnumerator FetchPlayerData(string idUsuario)
    {
        string urlCompleta = $"{apiUrlBase}{endpointCarga}{idUsuario}";
        Debug.Log($"Intentando cargar datos de perfil desde: {urlCompleta}");

        using (UnityWebRequest webRequest = UnityWebRequest.Get(urlCompleta))
        {
            yield return webRequest.SendWebRequest();

            if (webRequest.result != UnityWebRequest.Result.Success)
            {
                Debug.LogError($"Error de conexión al cargar perfil de la API: {webRequest.error}.");
            }
            else
            {
                string jsonResponse = webRequest.downloadHandler.text;

                try
                {
                    DatosJugadorAPI datos = JsonUtility.FromJson<DatosJugadorAPI>(jsonResponse);

                    if (DatosJugador.Instancia != null)
                    {
                        DatosJugador.Instancia.idUsuario = datos.userId;
                        DatosJugador.Instancia.MapearDesdeAPI(datos);

                        Debug.Log($" Perfil cargado de la API. Jugador: {datos.username} (Nivel {datos.level})");
                    }
                }
                catch (Exception e)
                {
                    Debug.LogError($"Error al procesar JSON de perfil. Error: {e.Message}");
                }
            }
        }
    }

    public void IntentarLogin(string login, string password, TextMeshProUGUI textoErrorUI)
    {
        StopAllCoroutines();
        StartCoroutine(ProcessLogin(login, password, textoErrorUI));
    }

    IEnumerator ProcessLogin(string login, string password, TextMeshProUGUI textoErrorUI)
    {
        string urlCompleta = $"{apiUrlBase}{endpointLogin}";
        LoginData loginData = new LoginData { login = login, password = password };
        string jsonPayload = JsonUtility.ToJson(loginData);

        using (UnityWebRequest webRequest = UnityWebRequest.PostWwwForm(urlCompleta, "POST"))
        {
            byte[] bodyRaw = System.Text.Encoding.UTF8.GetBytes(jsonPayload);
            webRequest.uploadHandler = new UploadHandlerRaw(bodyRaw);
            webRequest.downloadHandler = new DownloadHandlerBuffer();
            webRequest.SetRequestHeader("Content-Type", "application/json");

            yield return webRequest.SendWebRequest();

            if (webRequest.result != UnityWebRequest.Result.Success)
            {
                string errorMsg = webRequest.error.Contains("401") ? "Usuario o contraseña incorrectos." : "Error de conexión con el servidor.";
                textoErrorUI.text = errorMsg;
                Debug.LogError($"Error de Login: {webRequest.error}. URL: {urlCompleta}");
            }
            else
            {
                LoginResponse response = JsonUtility.FromJson<LoginResponse>(webRequest.downloadHandler.text);

                if (response != null && response.user != null && !string.IsNullOrEmpty(response.user.userId))
                {
                    Debug.Log($"Login Exitoso! Usuario: {response.user.username}");

                    DatosJugador.Instancia.idUsuario = response.user.userId;
                    DatosJugador.Instancia.MapearDesdeAPI(response.user);

                    PlayerPrefs.SetString("SavedUserId", response.user.userId);
                    PlayerPrefs.Save();

                    if (LoginUI.Instancia != null)
                    {
                        LoginUI.Instancia.CerrarPanel();
                    }

                    if (controlTransicion != null)
                    {
                        controlTransicion.IniciarTransicion("Escena_MenuPrincipal");
                    }
                    else
                    {
                        Debug.LogError("Error: ControlTransicion no está asignado o es null. Cargando escena directamente.");
                        UnityEngine.SceneManagement.SceneManager.LoadScene("Escena_MenuPrincipal");
                    }
                }
                else
                {
                    textoErrorUI.text = "Respuesta inválida del servidor.";
                }
            }
        }
    }

    private IEnumerator FetchAndFuseServantData(ServantUsuarioAPI userServant)
    {
        string baseEndpoint = $"{apiUrlBase}/servants/{userServant.servantId}";

        using (UnityWebRequest webRequest = UnityWebRequest.Get(baseEndpoint))
        {
            yield return webRequest.SendWebRequest();

            if (webRequest.result == UnityWebRequest.Result.Success)
            {
                ServantBaseAPI baseData = JsonUtility.FromJson<ServantBaseAPI>(webRequest.downloadHandler.text);

                ServantData fusedData = new ServantData
                {
                    ServantBaseId = userServant.servantId,
                    Level = userServant.level,
                    Exp = userServant.exp,
                    Ascension = userServant.ascension,
                    Skill1Level = userServant.skillsLevel.skill1,
                    Skill2Level = userServant.skillsLevel.skill2,
                    Skill3Level = userServant.skillsLevel.skill3,

                    Name = baseData.name,
                    Class = baseData.@class,
                    Rank = baseData.rank,
                    PictureName = baseData.picture,
                    FrontName = baseData.front,

                    BaseATK = baseData.baseStats.atk,
                    BaseHP = baseData.baseStats.hp,
                    NPGain = baseData.baseStats.npGain,

                    Skills = baseData.skills,
                    Passives = baseData.passives,
                    NPName = baseData.np.name,
                    NPEffect = baseData.np.effect

                };

                DatosJugador.Instancia.inventarioServants.Add(fusedData);
            }
            else
            {
                Debug.LogError($"Error al obtener Servant Base {userServant.servantId}: {webRequest.error}");
            }
        }
    }

    public IEnumerator FetchUserServants(string userId)
    {
        string endpoint = $"{apiUrlBase}/userServants/{userId}";

        using (UnityWebRequest webRequest = UnityWebRequest.Get(endpoint))
        {
            yield return webRequest.SendWebRequest();

            if (webRequest.result == UnityWebRequest.Result.Success)
            {
                string jsonResponse = webRequest.downloadHandler.text;
                ServantUsuarioAPI[] userServants;

                try
                {
                    userServants = JsonHelper.FromJson<ServantUsuarioAPI>(jsonResponse);
                }
                catch (Exception ex)
                {
                    Debug.LogError($"Error CRÍTICO al deserializar Servants. Error: {ex.Message}");
                    yield break;
                }

                DatosJugador.Instancia.inventarioServants.Clear();

                foreach (ServantUsuarioAPI userServant in userServants)
                {
                    yield return StartCoroutine(FetchAndFuseServantData(userServant));
                }

                Debug.Log($"Inventario de Servants cargado: {DatosJugador.Instancia.inventarioServants.Count} Servants totales.");
            }
            else
            {
                Debug.LogError($"Error al obtener inventario (404/500): {webRequest.error}");
            }
        }
    }
}