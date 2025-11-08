
using System.Collections.Generic;
using UnityEngine;
using System.Collections; 
using TMPro;
using System.Text; 
using UnityEngine.SceneManagement; 

public class ControladorNovelaVisual : MonoBehaviour
{
    // --- REFERENCIAS DE UI Y DATOS ---
    public DatosJugador datos; 
    public TextMeshProUGUI textoNombre;
    public TextMeshProUGUI textoDialogo;
    public UnityEngine.UI.Image spritePersonaje;

    [Header("Referencias del LOG")]
    public GameObject panelLog;
    public TextMeshProUGUI registroTextoCompleto;

    [Header("Configuración de Velocidad")]
    public float velocidadEscritura = 0.05f; // Segundos entre cada letra

    [Header("Orden de Partes (Rellenar en Inspector)")]
    public string[] ordenDePartes = { "C1P1", "C1P2", "C1P3" };

    [Header("Referencias Visuales")]
    public UnityEngine.UI.Image imagenFondo;

    // --- VARIABLES INTERNAS ---
    private Historia historiaActual;
    private int indiceLineaActual = 0;
    private bool estaEscribiendo = false;
    private StringBuilder historialConversacion = new StringBuilder();
    private const string RUTA_BASE_HISTORIA = "Capitulos/"; // Carpeta dentro de Resources

    // =================================================================
    // MÉTODOS PRINCIPALES
    // =================================================================

    void Start()
    {
        // 1. Encuentra el Gestor de Datos si no está asignado
        if (datos == null)
        {
            datos = FindObjectOfType<DatosJugador>();
            if (datos == null)
            {
                Debug.LogError("FATAL ERROR: No se encontró el script DatosJugador en la escena.");
                return;
            }
        }

        // 2. Carga la parte guardada (usa el nombre guardado en DatosJugador)
        CargarParteHistoria(datos.nombreParteActual);

        // 3. Ocultar el LOG al inicio
        if (panelLog != null)
        {
            panelLog.SetActive(false);
        }
    }

    void Update()
    {
        
        if (Input.GetMouseButtonDown(0) || Input.GetKeyDown(KeyCode.Space))
        {
            
            if (panelLog == null || !panelLog.activeSelf)
            {
                AvanzarDialogo();
            }
        }
    }

    // =================================================================
    // LÓGICA DE CARGA Y GUARDADO
    // =================================================================

    void CargarParteHistoria(string nombreParte)
    {
        string rutaCompleta = RUTA_BASE_HISTORIA + nombreParte;
        historiaActual = Resources.Load<Historia>(rutaCompleta);

        if (historiaActual != null)
        {
            indiceLineaActual = 0; // Inicia la nueva parte desde la línea 0
            Debug.Log($"Historia cargada: {nombreParte}. Iniciando desde el principio.");

            // Inicia la visualización de la primera línea de la nueva parte
            if (historiaActual.lineas.Length > 0)
            {
                CargarLinea(historiaActual.lineas[indiceLineaActual]);
            }
        }
        else
        {
            Debug.LogError($"Error: No se pudo cargar la parte de historia en la ruta: {rutaCompleta}.");
        }
    }

    public void AvanzarDialogo()
    {
        if (estaEscribiendo)
        {
            StopAllCoroutines();
            textoDialogo.maxVisibleCharacters = 9999;
            estaEscribiendo = false;
        }
        else
        {
            indiceLineaActual++;
            if (historiaActual != null && indiceLineaActual < historiaActual.lineas.Length)
            {
                // Todavía hay líneas: carga la siguiente línea
                CargarLinea(historiaActual.lineas[indiceLineaActual]);
            }
            else
            {
                AvanzarParte();
            }
        }
    }

    void AvanzarParte()
    {
        string parteActual = datos.nombreParteActual;
        int indiceActual = System.Array.IndexOf(ordenDePartes, parteActual);

        if (indiceActual != -1 && indiceActual < ordenDePartes.Length - 1)
        {
            // Obtener el nombre y guardar el progreso de la siguiente parte
            string siguienteParte = ordenDePartes[indiceActual + 1];
            datos.GuardarProgreso(siguienteParte);

            // Cargar la nueva parte inmediatamente
            CargarParteHistoria(siguienteParte);
        }
        else
        {
            
            Debug.Log("FIN DE HISTORIA. Cargar menú principal.");
            
            SceneManager.LoadScene("Escena_MenuPrincipal"); 
        }
    }

    void CargarLinea(LineaDialogo linea)
    {
        if (linea.FondoEscena != null)
        {
            // Solo cambia el fondo si se ha asignado un nuevo sprite en la línea
            imagenFondo.sprite = linea.FondoEscena;
        }

        GuardarEnHistorial(linea.NombrePersonaje, linea.Texto);

        
        textoNombre.text = linea.NombrePersonaje;
        if (linea.SpritePersonaje != null)
        {
            spritePersonaje.sprite = linea.SpritePersonaje;
            spritePersonaje.enabled = true;
        }
        else
        {
            spritePersonaje.enabled = false;
        }
        StartCoroutine(EfectoEscribir(linea.Texto));
    }

    // =================================================================
    // LÓGICA VISUAL Y CORRUTINAS
    // =================================================================

    IEnumerator EfectoEscribir(string textoObjetivo)
    {
        estaEscribiendo = true;
        textoDialogo.text = textoObjetivo;
        textoDialogo.maxVisibleCharacters = 0;

        while (textoDialogo.maxVisibleCharacters < textoObjetivo.Length)
        {
            textoDialogo.maxVisibleCharacters++;
            yield return new WaitForSeconds(velocidadEscritura);
        }

        estaEscribiendo = false;
    }

    // =================================================================
    // LÓGICA DEL LOG/HISTORIAL
    // =================================================================

    void GuardarEnHistorial(string nombre, string texto)
    {
        historialConversacion.Append($"**{nombre}**:\n");
        historialConversacion.Append(texto);
        historialConversacion.Append("\n\n");
    }

    public void ToggleLogPanel()
    {
        bool isActive = !panelLog.activeSelf;
        panelLog.SetActive(isActive);

        if (isActive)
        {
            registroTextoCompleto.text = historialConversacion.ToString();
        }
    }
}
