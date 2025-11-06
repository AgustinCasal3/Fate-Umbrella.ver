using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Permite crear un asset de historia haciendo clic derecho en el proyecto
[CreateAssetMenu(fileName = "NuevaHistoria", menuName = "NovelaVisual/Historia")]
public class Historia : ScriptableObject
{
    // El array (lista) de todas las líneas del capítulo
    public LineaDialogo[] lineas;
}