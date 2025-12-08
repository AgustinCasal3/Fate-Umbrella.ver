using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;


public class DatosJugador : MonoBehaviour
{
    // SINGLETON 
    public static DatosJugador Instancia;

    public string nombre = ""; // <- LIMPIO
    public int nivel = 0;      // <- LIMPIO
    public float experienciaActual = 0f; // <- LIMPIO
    public float experienciaNecesaria = 5000f;

    public List<ServantData> inventarioServants = new List<ServantData>();

    [Header("Datos de API")]
    
    public string idUsuario = "";
    public string nombreImagenPersonaje = "";

    [Header("Progreso de Historia (Guardado Local)")]

    public string nombreParteActual = "C1P1";

    private const string CLAVE_PROGRESO = "ProgresoHistoria";

 
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
        
        nombreParteActual = nombreDeLaSiguienteParte;
 
        PlayerPrefs.SetString(CLAVE_PROGRESO, nombreParteActual);

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

    public void MapearDesdeAPI(DatosJugadorAPI datos)
    {
        //Copia los datos de la respuesta de la API al Singleton
        nombre = datos.username;
        nivel = datos.level;
        experienciaActual = datos.exp;
        nombreImagenPersonaje = datos.picture;

        idUsuario = datos.userId;

        if (MenuUIController.Instancia != null)
        {
            MenuUIController.Instancia.ActualizarDatosUI();
            MenuUIController.Instancia.CargarImagenPersonaje();
        }
    }
}