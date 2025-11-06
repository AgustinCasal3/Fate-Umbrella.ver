using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class ControlEscenas : MonoBehaviour
{
    // Función pública que se activará con el botón
    // Añade esta referencia en el script que controla el botón
    // Añade esta referencia en el script que controla el botón
    public ControlTransicion gestorTransicion;

    public void CargarEscenaConTransicion(string nombreEscena)
    {
        // Llama a la nueva función de fundido
        gestorTransicion.IniciarTransicion(nombreEscena);
    }
}