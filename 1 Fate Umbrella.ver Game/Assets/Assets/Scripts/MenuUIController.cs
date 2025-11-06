using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;      // Para los textos
using UnityEngine.UI; // Para el Slider y Image

public class MenuUIController : MonoBehaviour
{
    // 1. Referencia al Script de Datos
    public DatosJugador datosJugador;

    // 2. Referencias a la Interfaz Visual 
    public TextMeshProUGUI textoNombre;
    public TextMeshProUGUI textoNivel;
    public Slider barraExperiencia;

    void Update()
    {
        // Update se llama en cada frame, asegurando que la UI esté actualizada
        ActualizarDatosUI();
    }

    void ActualizarDatosUI()
    {
        if (datosJugador != null)
        {
            // Actualiza Textos
            textoNombre.text = datosJugador.nombre;
            textoNivel.text = "Nivel " + datosJugador.nivel.ToString() + " / 100";

            // Actualiza Slider
            barraExperiencia.maxValue = datosJugador.experienciaNecesaria;
            barraExperiencia.value = datosJugador.experienciaActual;
        }
    }
    public string idProgresoHistoria = "1.01";

    void Awake()
    {
        // Al iniciar el juego, intenta cargar el ID guardado.
        // Si no encuentra "ProgresoHistoria", usará "1.01" como valor inicial.
        idProgresoHistoria = PlayerPrefs.GetString("ProgresoHistoria", "1.01");
    }
}
