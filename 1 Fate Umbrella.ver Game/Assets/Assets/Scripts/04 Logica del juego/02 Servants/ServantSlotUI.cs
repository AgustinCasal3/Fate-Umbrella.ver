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

        string classResourcePath = $"ClassIcons/{data.Class}";

        Sprite classSprite = Resources.Load<Sprite>(classResourcePath);

        if (classSprite != null)
        {
            rankIcon.sprite = classSprite;
           
            rankIcon.enabled = true;
        }
        else
        {
            
            Debug.LogError($"Ícono de Clase NO encontrado: {classResourcePath}. Verifica la carpeta ClassIcons y el nombre del archivo.");
            rankIcon.enabled = false; // Oculta el ícono si no se encuentra
        }

        slotButton.onClick.RemoveAllListeners();
        slotButton.onClick.AddListener(OnClickSlot);
    }

    private void OnClickSlot()
    {
        if (menuController != null)
        {
            menuController.LoadServantDetailScene(currentServantData.ServantBaseId);
        }
    }
}