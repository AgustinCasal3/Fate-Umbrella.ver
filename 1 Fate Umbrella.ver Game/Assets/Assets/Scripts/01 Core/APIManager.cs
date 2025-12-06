using UnityEngine;
using UnityEngine.Networking;
using System.Collections;
using System;
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

    //Carga de datos

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
                        // Usamos la función de mapeo para rellenar los datos
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

    //login

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
            // Configuración para enviar JSON
            byte[] bodyRaw = System.Text.Encoding.UTF8.GetBytes(jsonPayload);
            webRequest.uploadHandler = new UploadHandlerRaw(bodyRaw);
            webRequest.downloadHandler = new DownloadHandlerBuffer();
            webRequest.SetRequestHeader("Content-Type", "application/json");

            yield return webRequest.SendWebRequest();

            if (webRequest.result != UnityWebRequest.Result.Success)
            {
                // Muestra un error genérico, ya sea por conexión o credenciales (código 401)
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

                    //Guarda el ID de usuario en PlayerPrefs para futuras sesiones
                    PlayerPrefs.SetString("SavedUserId", response.user.userId);
                    PlayerPrefs.Save();

                    if (LoginUI.Instancia != null)
                    {
                        LoginUI.Instancia.CerrarPanel();
                    }

                    // 2. Realiza la Transición a la escena de menú.
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
}