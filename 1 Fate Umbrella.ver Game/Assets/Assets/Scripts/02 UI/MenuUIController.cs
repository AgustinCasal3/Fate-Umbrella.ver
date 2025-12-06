using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI; // Para Slider, Image, y Textos

public class MenuUIController : MonoBehaviour
{

    public static MenuUIController Instancia;
    private DatosJugador datosJugadorInstancia;

    public TextMeshProUGUI textoNombre;
    public TextMeshProUGUI textoNivel;
    public Slider barraExperiencia;

    [Header("Imagen de Perfil")]
    public Image imagenPersonajeUI; 

    [Header("Notificación de Desarrollo")]
    public GameObject panelNotificacion;
    public TextMeshProUGUI textoNotificacion;
    [Tooltip("Tiempo que la notificación estará visible")]
    public float tiempoVisibleNotificacion = 2.5f;


    void Awake()
    {
        if (Instancia == null)
        {
            Instancia = this;
        }
        else
        {
            Destroy(gameObject);
        }
    }

    void Start()
    {
        if (DatosJugador.Instancia != null)
        {
            // Los datos ya están cargados en el Singleton después del login.
            ActualizarDatosUI();
            CargarImagenPersonaje();
         }

        if (panelNotificacion != null)
        {
            panelNotificacion.SetActive(false);
        }
    }


    public void ActualizarDatosUI()
    {
        DatosJugador datos = DatosJugador.Instancia; 

        if (datos != null)
        {
            // diagnostico porque no se que esta pasando
            Debug.Log($"DIAGNÓSTICO: Asignando Nombre: '{datos.nombre}', Nivel: {datos.nivel}");

            
            textoNombre.text = datos.nombre;
            textoNivel.text = "Nivel " + datos.nivel.ToString();
            barraExperiencia.maxValue = datos.experienciaNecesaria;
            barraExperiencia.value = datos.experienciaActual;
        }
    }


    public void CargarImagenPersonaje()
    {
        if (imagenPersonajeUI == null || DatosJugador.Instancia == null) return;

        string nombreArchivo = DatosJugador.Instancia.nombreImagenPersonaje;
        if (string.IsNullOrEmpty(nombreArchivo)) return;

        
        string nombreRecurso = nombreArchivo.Replace(".png", "").Replace(".jpg", "");

        Sprite nuevoSprite = Resources.Load<Sprite>($"Personajes/{nombreRecurso}");

        if (nuevoSprite != null)
        {
            imagenPersonajeUI.sprite = nuevoSprite;
        }
        else
        {
            Debug.LogError($"IMAGEN NO ENCONTRADA. Asegúrate de que '{nombreRecurso}' esté en Assets/Resources/Personajes/.");
        }
    }





    // mensajes del sech 

    public void OnClickFuncionalidadEnDesarrollo()
    {
        StopAllCoroutines();
        StartCoroutine(MostrarNotificacion("Esta funcionalidad está todavía en desarrollo y estará disponible en una versión futura."));
    }

    IEnumerator MostrarNotificacion(string mensaje)
    {
        if (panelNotificacion != null) panelNotificacion.SetActive(true);
        if (textoNotificacion != null) textoNotificacion.text = mensaje;
        yield return new WaitForSeconds(tiempoVisibleNotificacion);
        if (panelNotificacion != null) panelNotificacion.SetActive(false);
    }

    public void OnClickReiniciarYRefrescar()
    {
        if (DatosJugador.Instancia != null)
        {
            DatosJugador.Instancia.ReiniciarProgreso();
            string idACargar = DatosJugador.Instancia.idUsuario;
            // Llama a la API de nuevo para recargar el perfil
            APIManager.Instancia.IniciarCargaDeDatos(idACargar);
        }
    }
}