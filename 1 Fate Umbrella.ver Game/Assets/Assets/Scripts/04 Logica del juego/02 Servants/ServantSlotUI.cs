// ServantSlotUI.cs

using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class ServantSlotUI : MonoBehaviour
{
    [Header("Referencias de UI")]
    public Image servantImage;
    public Image rankIcon;
    public Button slotButton;

    private ServantData currentServantData;
    private ServantMenuController menuController;

    public void Setup(ServantData data, ServantMenuController manager)
    {
        currentServantData = data;
        menuController = manager;

        // 1. Mostrar Imagen: Carga dinámica desde Assets/Resources/Personajes/
        string resourcePath = $"Personajes/{data.PictureName}";

        Sprite servantSprite = Resources.Load<Sprite>(resourcePath);

        if (servantSprite != null)
        {
            servantImage.sprite = servantSprite;
        }
        else
        {
            Debug.LogError($"Sprite no encontrado: {resourcePath}.");
        }

        // 2. Asignar el evento Click (transición de escena)
        slotButton.onClick.RemoveAllListeners();
        slotButton.onClick.AddListener(OnClickSlot);
    }

    private void OnClickSlot()
    {
        // Pasa el ID del Servant al Manager para iniciar la transición
        if (menuController != null)
        {
            menuController.LoadServantDetailScene(currentServantData.ServantBaseId);
        }
    }
}