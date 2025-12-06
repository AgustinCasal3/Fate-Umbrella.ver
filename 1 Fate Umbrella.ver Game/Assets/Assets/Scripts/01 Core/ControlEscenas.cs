using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class ControlEscenas : MonoBehaviour
{
    
    public ControlTransicion gestorTransicion;

    public void CargarEscenaConTransicion(string nombreEscena)
    {
        // Llama a la nueva función de fundido
        gestorTransicion.IniciarTransicion(nombreEscena);
    }
}