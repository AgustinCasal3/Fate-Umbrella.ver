using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DatosJugador : MonoBehaviour
{
    // Asegura que solo haya una instancia de este objeto (SINGLETON)
    public static DatosJugador Instancia;
    public string nombre = "Izuru";
    public int nivel = 2;
    public float experienciaActual = 59f;
    public float experienciaNecesaria = 100f;

    [Header("Progreso de Historia")]
    // Almacena el nombre del ScriptableObject de la parte de la historia.
    // "C1P1" es el valor por defecto para el inicio de tu juego.
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

        // 1. CARGA INICIAL: Carga el progreso al iniciar la aplicación
        CargarProgreso();
    }

    void CargarProgreso()
    {
        // Si no existe la clave, usará "C1P1" (el inicio)
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
        // 1. Elimina la clave de guardado del disco
        PlayerPrefs.DeleteKey(CLAVE_PROGRESO);

        // 2. Guarda el cambio en el disco
        PlayerPrefs.Save();

        // 3. Establece el valor por defecto en memoria
        nombreParteActual = "C1P1";

        Debug.Log("¡PROGRESO REINICIADO! La historia iniciará en C1P1 la próxima vez.");
    }
}