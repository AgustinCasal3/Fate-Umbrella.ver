using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class BotonVolver : MonoBehaviour
{
    [Tooltip("El nombre de la escena a la que volver, ej: Escena_MenuPrincipal")]
    public string nombreEscenaMenuPrincipal = "Escena_MenuPrincipal";

    // Referencia que debe arrastrarse en el Inspector
    [Tooltip("Arrastra el Gestor_Transicion de la escena")]
    public ControlTransicion gestorTransicion;

    // Esta función se llama al hacer clic en el botón
    public void VolverAMenuPrincipal()
    {
        // 1. Verificar si tenemos el Gestor de Transición
        if (gestorTransicion != null)
        {
            // 2. Iniciar la animación de oscurecimiento (Fade Out)
            gestorTransicion.IniciarTransicion(nombreEscenaMenuPrincipal);
        }
        else
        {
            // 3. Si por alguna razón no se asignó, cargamos directamente (Fallback)
            Debug.LogWarning("GestorTransicion no asignado. Cargando escena directamente.");
            SceneManager.LoadScene(nombreEscenaMenuPrincipal);
        }
    }
}
