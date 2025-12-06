using System;

// Mapea el cuerpo del request: { "login": "...", "password": "..." }
[Serializable]
public class LoginData
{
    public string login;
    public string password;
}