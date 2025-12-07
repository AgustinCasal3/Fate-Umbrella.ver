// ServantMenuController.cs

using UnityEngine;
using System.Collections.Generic;
using TMPro;

public class ServantMenuController : MonoBehaviour
{
    [Header("Referencias de Lista")]
    public Transform contentParent;
    public GameObject servantSlotPrefab;
    public TextMeshProUGUI servantCountText;

    // NOTA: No necesitamos el panel de detalles en esta escena.

    void Start()
    {
        // 1. Cargar datos si es necesario.
        if (DatosJugador.Instancia != null && DatosJugador.Instancia.inventarioServants.Count == 0)
        {
            StartCoroutine(APIManager.Instancia.FetchUserServants(DatosJugador.Instancia.idUsuario));
            Invoke("CheckAndDisplayServants", 1.5f);
        }
        else
        {
            DisplayServants();
        }
    }

    private void CheckAndDisplayServants()
    {
        if (DatosJugador.Instancia.inventarioServants.Count > 0)
        {
            DisplayServants();
        }
    }

    private void DisplayServants()
    {
        // Limpiamos los slots
        foreach (Transform child in contentParent)
        {
            Destroy(child.gameObject);
        }

        List<ServantData> servants = DatosJugador.Instancia.inventarioServants;

        foreach (ServantData servant in servants)
        {
            GameObject slotObject = Instantiate(servantSlotPrefab, contentParent);
            ServantSlotUI slotUI = slotObject.GetComponent<ServantSlotUI>();

            if (slotUI != null)
            {
                slotUI.Setup(servant, this);
            }
        }

        if (servantCountText != null)
        {
            servantCountText.text = $"{servants.Count}/30";
        }
    }

    // --- FUNCIÓN DE TRANSICIÓN DE ESCENA ---
    public void LoadServantDetailScene(string servantId)
    {
        // GUARDAR EL ID SELECCIONADO ANTES DE CAMBIAR DE ESCENA
        // (Necesitarás esta variable en DatosJugador para la próxima fase)
        // DatosJugador.Instancia.ServantSeleccionadoId = servantId; 

        // Asume que la escena de detalles se llama "Escena_DetallesServant"
        if (APIManager.Instancia != null && APIManager.Instancia.controlTransicion != null)
        {
            APIManager.Instancia.controlTransicion.IniciarTransicion("Escena_DetallesServant");
        }
    }

    // Función asignada al botón VOLVER
    public void OnClickVolver()
    {
        if (APIManager.Instancia != null && APIManager.Instancia.controlTransicion != null)
        {
            APIManager.Instancia.controlTransicion.IniciarTransicion("Escena_MenuPrincipal");
        }
    }
}