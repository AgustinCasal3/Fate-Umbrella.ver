using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class LineaDialogo
{
    // El nombre del personaje que habla
    public string NombrePersonaje;

    // El texto del diálogo
    [TextArea(3, 10)]  //inspector
    public string Texto;

    // Nombre del Sprite a cargar, 
    public Sprite SpritePersonaje;

    // fomdo de la escena
    public Sprite FondoEscena;

}