using System;

[Serializable]
public class DatosJugadorAPI
{
    public string userId;          // Para buscar o guardar al jugador
    public string username;        // Nombre del jugador
    public int level;              // Nivel actual
    public int exp;                // Experiencia actual
    public string picture;         // Nombre o ruta del archivo de la imagen del personaje
}