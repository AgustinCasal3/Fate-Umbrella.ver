using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;      // Para los textos
using UnityEngine.UI; // Para el Slider y Image

public class MenuUIController : MonoBehaviour
{

    private DatosJugador datosJugadorInstancia;
    public TextMeshProUGUI textoNombre;
    public TextMeshProUGUI textoNivel;
    public Slider barraExperiencia;

    [Header("Notificación de Desarrollo")]
    // Arrastra aquí el GameObject 'Panel_Notificacion'
    public GameObject panelNotificacion;
    // Arrastra aquí el TextMeshPro 'Texto_Notificacion'
    public TextMeshProUGUI textoNotificacion;

    [Tooltip("Tiempo que la notificación estará visible")]
    public float tiempoVisibleNotificacion = 2.5f;

    void Start()
    {

        datosJugadorInstancia = DatosJugador.Instancia;
        ActualizarDatosUI();

        if (panelNotificacion != null)
        {
            panelNotificacion.SetActive(false);
        }
    }

    void Update()
    {
        ActualizarDatosUI();
    }

    void ActualizarDatosUI()
    {
        if (datosJugadorInstancia != null)
        {
            
            textoNombre.text = datosJugadorInstancia.nombre;
            textoNivel.text = "Nivel " + datosJugadorInstancia.nivel.ToString(); 
 
            barraExperiencia.maxValue = datosJugadorInstancia.experienciaNecesaria;
            barraExperiencia.value = datosJugadorInstancia.experienciaActual;
        }
    }

    // --- LÓGICA DEL BOTON DE REINICIAR PROGRESO ---

    public void OnClickFuncionalidadEnDesarrollo()
    {
    
        StopAllCoroutines();
        StartCoroutine(MostrarNotificacion("Esta funcionalidad está todavía en desarrollo y estará disponible en una versión futura."));
    }

    IEnumerator MostrarNotificacion(string mensaje)
    {
        // 1. Muestra el panel con el mensaje
        if (panelNotificacion != null)
        {
            panelNotificacion.SetActive(true);
        }
        if (textoNotificacion != null)
        {
            textoNotificacion.text = mensaje;
        }

        yield return new WaitForSeconds(tiempoVisibleNotificacion);

        if (panelNotificacion != null)
        {
            panelNotificacion.SetActive(false);
        }
    }

    public void OnClickReiniciarYRefrescar()
    {
        if (DatosJugador.Instancia != null)
        {
         
            DatosJugador.Instancia.ReiniciarProgreso();

        }
    }
}