using UnityEngine;
using UnityEngine.Networking;
using System.Collections;
using System;

public class APIManager : MonoBehaviour
{
    public static APIManager Instancia;

    // --- CONFIGURACIÓN DE LA CONEXIÓN ---
    public string apiUrlBase = "http://localhost:3001";
    public string endpointCarga = "/users/";

    // El ID fijo que se usaba antes del login
    public string idUsuarioPrueba = "1";

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
        // Al iniciar, siempre cargamos el ID de prueba fijo
        IniciarCargaDeDatos(idUsuarioPrueba);
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
                    // Necesitas que DatosJugadorAPI tenga 'passwordHash' para que no falle con el JSON,
                    // pero no lo usamos. Mantenlo si es necesario.
                    DatosJugadorAPI datos = JsonUtility.FromJson<DatosJugadorAPI>(jsonResponse);

                    if (DatosJugador.Instancia != null)
                    {
                        // Llenamos los datos de perfil: Nombre, Nivel, EXP, Imagen
                        DatosJugador.Instancia.idUsuario = datos.userId;
                        DatosJugador.Instancia.nombre = datos.username;
                        DatosJugador.Instancia.nivel = datos.level;
                        DatosJugador.Instancia.experienciaActual = datos.exp;
                        DatosJugador.Instancia.nombreImagenPersonaje = datos.picture;

                        Debug.Log($"Perfil cargado de la API. Jugador: {datos.username} (Nivel {datos.level})");

                        if (MenuUIController.Instancia != null)
                        {
                            MenuUIController.Instancia.ActualizarDatosUI();
                            MenuUIController.Instancia.CargarImagenPersonaje();
                        }
                    }
                }
                catch (Exception e)
                {
                    Debug.LogError($"Error al procesar JSON de perfil. Error: {e.Message}");
                }
            }
        }
    }
}