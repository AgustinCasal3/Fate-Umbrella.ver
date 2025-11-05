using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement; 

public class ControlEscenas : MonoBehaviour
{
    // Función pública que se activará con el botón
    public void CargarEscena(string nombreEscena)
    {
        SceneManager.LoadScene(nombreEscena);
    }
}