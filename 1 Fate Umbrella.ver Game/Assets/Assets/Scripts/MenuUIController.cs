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

    void Start()
    {

        datosJugadorInstancia = DatosJugador.Instancia;

        ActualizarDatosUI();
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
            textoNivel.text = "Nivel " + datosJugadorInstancia.nivel.ToString(); // Ajustado a solo Nivel
 
            barraExperiencia.maxValue = datosJugadorInstancia.experienciaNecesaria;
            barraExperiencia.value = datosJugadorInstancia.experienciaActual;
        }
    }

    // --- LÓGICA DEL BOTÓN DE REINICIAR PROGRESO ---

    public void OnClickReiniciarYRefrescar()
    {
        if (DatosJugador.Instancia != null)
        {
         
            DatosJugador.Instancia.ReiniciarProgreso();

        }
    }
}
