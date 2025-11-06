using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class LineaDialogo
{
    // El nombre del personaje que habla
    public string NombrePersonaje;

    // El texto del diálogo
    [TextArea(3, 10)] // Para tener un área de texto grande en el Inspector
    public string Texto;

    // (Opcional) Nombre del Sprite a cargar, si cambias de personaje
    public Sprite SpritePersonaje;
}