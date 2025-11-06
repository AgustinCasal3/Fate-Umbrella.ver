using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Collections; // Necesario para IEnumarator
using TMPro;

public class ControladorNovelaVisual : MonoBehaviour
{
    // Referencias de UI (Arrastrar en el Inspector)
    public TextMeshProUGUI textoNombre;
    public TextMeshProUGUI textoDialogo;
    public UnityEngine.UI.Image spritePersonaje;

    // Referencia al archivo de datos de historia
    public Historia historiaActual;

    [Header("Configuración de Velocidad")]
    public float velocidadEscritura = 0.05f; // Segundos entre cada letra

    private int indiceLineaActual = 0;
    private bool estaEscribiendo = false;

    void Start()
    {
        if (historiaActual != null)
        {
            // Inicializa mostrando la primera línea
            CargarLinea(historiaActual.lineas[indiceLineaActual]);
        }
    }

    void Update()
    {
        // Detecta el clic (Input.GetMouseButtonDown(0)) o la tecla (Input.GetKeyDown(KeyCode.Space))
        if (Input.GetMouseButtonDown(0) || Input.GetKeyDown(KeyCode.Space))
        {
            AvanzarDialogo();
        }
    }

    public void AvanzarDialogo()
    {
        if (estaEscribiendo)
        {
            // Si el texto se está escribiendo, lo muestra completo al instante (SKIP)
            StopAllCoroutines();
            textoDialogo.maxVisibleCharacters = 9999;
            estaEscribiendo = false;
        }
        else
        {
            // Si el texto ya está completo, avanza a la siguiente línea
            indiceLineaActual++;
            if (indiceLineaActual < historiaActual.lineas.Length)
            {
                CargarLinea(historiaActual.lineas[indiceLineaActual]);
            }
            else
            {
                // Fin de la historia
                Debug.Log("FIN DE CAPÍTULO. Volviendo al menú.");
                // Aquí podrías usar SceneManager.LoadScene("Escena_MenuPrincipal");
            }
        }
    }

    void CargarLinea(LineaDialogo linea)
    {
        // 1. Actualiza Nombre y Sprite
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

        // 2. Inicia el efecto de escritura
        StartCoroutine(EfectoEscribir(linea.Texto));
    }

    IEnumerator EfectoEscribir(string textoObjetivo)
    {
        estaEscribiendo = true;
        textoDialogo.text = textoObjetivo; // Carga todo el texto, pero...
        textoDialogo.maxVisibleCharacters = 0; // ...solo muestra 0 caracteres

        // Muestra los caracteres uno por uno
        while (textoDialogo.maxVisibleCharacters < textoObjetivo.Length)
        {
            textoDialogo.maxVisibleCharacters++;
            yield return new WaitForSeconds(velocidadEscritura); // Espera antes de mostrar la siguiente letra
        }

        estaEscribiendo = false;
    }
}