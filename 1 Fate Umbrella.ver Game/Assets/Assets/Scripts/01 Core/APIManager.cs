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

    // FUNCIÓN 1: OBTENER DATOS BASE Y FUSIONAR
    private IEnumerator FetchAndFuseServantData(ServantUsuarioAPI userServant)
    {
        // 1. OBTENER LA DATA BASE (usando el servantId: "3", etc.)
        // AJUSTA ESTE ENDPOINT para que traiga la data base de un solo Servant dado su ID.
        string baseEndpoint = $"{apiUrlBase}/servants/{userServant.servantId}";

        using (UnityWebRequest webRequest = UnityWebRequest.Get(baseEndpoint))
        {
            yield return webRequest.SendWebRequest();

            if (webRequest.result == UnityWebRequest.Result.Success)
            {
                // Deserializamos la data base
                ServantBaseAPI baseData = JsonUtility.FromJson<ServantBaseAPI>(webRequest.downloadHandler.text);

                // 2. FUSIÓN: Crear el modelo ServantData completo
                ServantData fusedData = new ServantData
                {
                    // Datos de Usuario (ServantUsuarioAPI) 
                    ServantBaseId = userServant.servantId,
                    Level = userServant.level,
                    Exp = userServant.exp,
                    Ascension = userServant.ascension,
                    Skill1Level = userServant.skillsLevel.skill1,
                    Skill2Level = userServant.skillsLevel.skill2,
                    Skill3Level = userServant.skillsLevel.skill3,

                    // Datos de Base (ServantBaseAPI) 
                    Name = baseData.name,
                    Class = baseData.@class,
                    Rank = baseData.rank,
                    PictureName = baseData.picture,
                    FrontName = baseData.front,

                    // Stats
                    BaseATK = baseData.baseStats.atk,
                    BaseHP = baseData.baseStats.hp,
                    NPGain = baseData.baseStats.npGain,

                    // Habilidades y NP (Copiamos las referencias de los arrays/objetos)
                    Skills = baseData.skills,
                    Passives = baseData.passives,
                    NPName = baseData.np.name,
                    NPEffect = baseData.np.effect

                };

                // 3. AÑADIR al Singleton
                DatosJugador.Instancia.inventarioServants.Add(fusedData);
            }
            else
            {
                Debug.LogError($"Error al obtener Servant Base {userServant.servantId}: {webRequest.error}");
            }
        }
    }

    // FUNCIÓN 2: OBTENER LA LISTA DE SERVANTS DEL INVENTARIO

    // NOTA: Para que Unity deserialice correctamente un array JSON (ej: [{}, {}, {}]),
    // necesitamos un "Wrapper" si la respuesta es solo el array.
    // Si tu API devuelve { "servants": [{}, {}, {}] }, usa un Wrapper.
    [System.Serializable]
    public class UserServantListWrapper
    {
        public ServantUsuarioAPI[] servants; // Ajusta el nombre del campo si es diferente
    }

    public IEnumerator FetchUserServants(string userId)
    {
        // El endpoint debe devolver una lista/array de ServantUsuarioAPI para el userId.
        // AJUSTA ESTE ENDPOINT.
        string endpoint = $"{apiUrlBase}/userServants/{userId}";

        using (UnityWebRequest webRequest = UnityWebRequest.Get(endpoint))
        {
            yield return webRequest.SendWebRequest();

            if (webRequest.result == UnityWebRequest.Result.Success)
            {
                string jsonResponse = webRequest.downloadHandler.text;

                // Suponemos que la respuesta es un array simple de ServantUsuarioAPI. 
                // Si tu API devuelve { "servants": [...] }, usa UserServantListWrapper
                ServantUsuarioAPI[] userServants;

                try
                {
                    // INTENTO 1: Deserializar como Wrapper (Si viene con llave raíz)
                    UserServantListWrapper wrapper = JsonUtility.FromJson<UserServantListWrapper>(jsonResponse);
                    userServants = wrapper.servants;
                }
                catch
                {
                    // INTENTO 2: Deserializar como array directo (Si el JSON es solo [...])
                    // Requiere librerías externas o un truco, pero lo intentaremos simple:
                    // Si tienes problemas aquí, AJUSTA el endpoint para que devuelva un objeto con una clave raíz.
                    // Por simplicidad, asumiremos que el Wrapper funciona.
                    Debug.LogWarning("No se pudo deserializar con Wrapper. La API debe devolver un objeto contenedor.");
                    yield break;
                }

                // Limpiamos la lista global y empezamos la fusión
                DatosJugador.Instancia.inventarioServants.Clear();

                foreach (ServantUsuarioAPI userServant in userServants)
                {
                    // Ejecutamos la corrutina de fusión para cada Servant individualmente
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