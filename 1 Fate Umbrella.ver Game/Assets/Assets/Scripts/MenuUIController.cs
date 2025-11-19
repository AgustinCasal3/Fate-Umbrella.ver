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
        datosJugadorInstancia = DatosJugador.Instancia;

        if (panelNotificacion != null)
        {
            panelNotificacion.SetActive(false);
        }
    }

    void Update()
    {

    }


    public void ActualizarDatosUI()
    {
        if (datosJugadorInstancia != null)
        {
            textoNombre.text = datosJugadorInstancia.nombre;
            textoNivel.text = "Nivel " + datosJugadorInstancia.nivel.ToString();
            barraExperiencia.maxValue = datosJugadorInstancia.experienciaNecesaria;
            barraExperiencia.value = datosJugadorInstancia.experienciaActual;
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
            // Llama a la API de nuevo para recargar el perfil
            FindObjectOfType<APIManager>()?.IniciarCargaDeDatos(DatosJugador.Instancia.nombre);
        }
    }
}