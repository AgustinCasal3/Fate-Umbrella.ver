using UnityEngine;
using UnityEngine.Networking;
using System.Collections;
using System;

public class APIManager : MonoBehaviour
{
    // --- CONFIGURACIÓN DE LA CONEXIÓN ---
    [Header("Configuración del Servidor")]
    [Tooltip("URL base del servidor (Ej: http://localhost:3000 o https://api.tu-juego.com)")]
    public string apiUrlBase = "http://localhost:3000";

    [Tooltip("Endpoint para obtener el perfil. Ej: /api/jugador/perfil/")]
    public string endpointCarga = "/api/jugador/perfil/";

    [Tooltip("ID de usuario para cargar (Esto se obtendría del login, pero lo dejamos fijo para pruebas)")]
    public string idUsuarioACargar = "1";

    // Referencia al Singleton de la UI para actualizar la imagen y los textos
    private MenuUIController menuUIControllerInstancia => MenuUIController.Instancia;


    void Start()
    {
        // Al iniciar la escena, intentamos cargar los datos del perfil desde la API.
        IniciarCargaDeDatos(idUsuarioACargar);
    }

    public void IniciarCargaDeDatos(string idUsuario)
    {
        StopAllCoroutines();
        StartCoroutine(FetchPlayerData(idUsuario));
    }

    // Corrutina para realizar la petición GET (Lectura)
    IEnumerator FetchPlayerData(string idUsuario)
    {
        // Construye la URL completa (Ej: http://localhost:3000/api/jugador/perfil/1)
        string urlCompleta = $"{apiUrlBase}{endpointCarga}{idUsuario}";
        Debug.Log($"Intentando cargar datos de perfil desde: {urlCompleta}");

        using (UnityWebRequest webRequest = UnityWebRequest.Get(urlCompleta))
        {
            // Enviar la solicitud y esperar
            yield return webRequest.SendWebRequest();

            if (webRequest.result != UnityWebRequest.Result.Success)
            {
                // FALLO: Error de red o servidor. Usamos los datos por defecto/locales.
                Debug.LogError($"Error de conexión al cargar perfil de la API: {webRequest.error}. Se usarán los datos por defecto/guardados localmente.");
            }
            else
            {
                // ÉXITO: Procesar JSON y llenar el Singleton
                string jsonResponse = webRequest.downloadHandler.text;

                try
                {
                    // Deserializar el JSON usando la clase DatosJugadorAPI
                    DatosJugadorAPI datos = JsonUtility.FromJson<DatosJugadorAPI>(jsonResponse);

                    // --- ASIGNACIÓN AL SINGLETON (DatosJugador.Instancia) ---
                    if (DatosJugador.Instancia != null)
                    {
                        // Llenamos los datos de perfil: Nombre, Nivel, EXP, Imagen
                        DatosJugador.Instancia.nombre = datos.username;
                        DatosJugador.Instancia.nivel = datos.level;
                        DatosJugador.Instancia.experienciaActual = datos.exp;
                        DatosJugador.Instancia.nombreImagenPersonaje = datos.picture;

                        Debug.Log($"Perfil cargado de la API. Jugador: {datos.username} (Nivel {datos.level})");

                        // Una vez que el Singleton tiene los datos, forzamos la actualización de la UI
                        if (menuUIControllerInstancia != null)
                        {
                            menuUIControllerInstancia.ActualizarDatosUI();
                            menuUIControllerInstancia.CargarImagenPersonaje();
                        }
                    }
                }
                catch (Exception e)
                {
                    Debug.LogError($"Error al procesar JSON. Revisa la clase DatosJugadorAPI. Error: {e.Message}");
                }
            }
        }
    }

    // NOTA: La función de GUARDADO (POST/PUT) se implementará cuando el backend esté listo. 
    // Por ahora, el guardado de progreso de historia se maneja localmente en DatosJugador.cs.
}