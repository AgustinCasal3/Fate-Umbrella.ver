using System;

// Mapea la respuesta JSON completa (necesita el token y el objeto user)
[Serializable]
public class LoginResponse
{
    public string message;
    public string token;
    public DatosJugadorAPI user; 
}