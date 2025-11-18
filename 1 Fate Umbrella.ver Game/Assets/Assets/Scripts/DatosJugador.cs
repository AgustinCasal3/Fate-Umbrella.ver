using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DatosJugador : MonoBehaviour
{
    public static DatosJugador Instancia;
    public string nombre = "Izuru";
    public int nivel = 2;
    public float experienciaActual = 79f;
    public float experienciaNecesaria = 100f;

    [Header("Progreso de Historia")]
  
    public string nombreParteActual = "C1P1";

    private const string CLAVE_PROGRESO = "ProgresoGuardado";

    void Awake()
    {
        // Implementación del Singleton (asegura que solo exista uno)
        if (Instancia != null)
        {
            Destroy(gameObject);
            return;
        }

        Instancia = this;
        DontDestroyOnLoad(gameObject);

        CargarProgreso();
    }

    void CargarProgreso()
    {
        nombreParteActual = PlayerPrefs.GetString(CLAVE_PROGRESO, "C1P1");
        Debug.Log("Progreso de historia cargado: " + nombreParteActual);
    }

    public void GuardarProgreso(string nombreDeLaSiguienteParte)
    {
        // 1. Actualiza la variable en memoria
        nombreParteActual = nombreDeLaSiguienteParte;

        // 2. Guarda el string de forma permanente en PlayerPrefs
        PlayerPrefs.SetString(CLAVE_PROGRESO, nombreParteActual);

        // 3. Escribe los datos al disco
        PlayerPrefs.Save();

        Debug.Log("Progreso guardado: " + nombreDeLaSiguienteParte);
    }
    public void ReiniciarProgreso()
    {
        PlayerPrefs.DeleteKey(CLAVE_PROGRESO);

        PlayerPrefs.Save();

        nombreParteActual = "C1P1";

        Debug.Log("¡PROGRESO REINICIADO! La historia iniciará en C1P1 la próxima vez.");
    }
}