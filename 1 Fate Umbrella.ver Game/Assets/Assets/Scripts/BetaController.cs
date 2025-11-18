using System.Collections.Generic;
using UnityEngine;
using System.Collections;
using TMPro; 

public class SplashController : MonoBehaviour
{
    [Header("Configuración del Splash")]
    [Tooltip("La duración que la pantalla estará visible (en segundos)")]
    public float duracionVisible = 5.0f;

    [Tooltip("Versión del juego que aparecerá en el texto")]
    public string versionJuego = "BETA V1.0";

    [Header("Referencias")]
    public TextMeshProUGUI textoVersion;

    public ControlTransicion gestorTransicion;

    [Tooltip("El nombre exacto de la escena del menu principal")]
    public string nombreEscenaSiguiente = "Escena_MenuPrincipal";

    void Start()
    {

        if (gestorTransicion == null)
        {
            Debug.LogError("Error: GestorTransicion no asignado");
            return;
        }

        if (textoVersion != null)
        {
            textoVersion.text = versionJuego;
        }

        StartCoroutine(CicloDeSplash());
    }

    IEnumerator CicloDeSplash()
    {
   
        yield return new WaitForSeconds(duracionVisible);

        gestorTransicion.IniciarTransicion(nombreEscenaSiguiente);
    }
}