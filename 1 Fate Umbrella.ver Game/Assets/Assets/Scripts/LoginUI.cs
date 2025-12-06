using UnityEngine;
using TMPro;

public class LoginUI : MonoBehaviour
{
    public static LoginUI Instancia;

    [Header("Referencias UI")]
    public TMP_InputField inputLogin; 
    public TMP_InputField inputPassword; 
    public GameObject panelLogin; 

    [Header("Referencias Sistema")]
    public APIManager apiManager;
    public TextMeshProUGUI textoError; 

    void Awake()
    {
        if (Instancia == null)
        {
            Instancia = this;
        }
    }

    public void OnClickLogin()
    {
        if (apiManager == null)
        {
            Debug.LogError("Error: APIManager no asignado.");
            return;
        }

        string login = inputLogin.text;
        string pass = inputPassword.text;

        if (string.IsNullOrEmpty(login) || string.IsNullOrEmpty(pass))
        {
            textoError.text = "Ingresa email/usuario y contraseña.";
            return;
        }

        // Limpiamos el error antes de intentar
        textoError.text = "";

        // Llamada al método POST del APIManager
        apiManager.IntentarLogin(login, pass, textoError);
    }

    public void AbrirPanelLogin()
    {
        if (panelLogin != null)
        {
            panelLogin.SetActive(true);
        }
    }

    public void CerrarPanel()
    {
        if (panelLogin != null)
        {
            // Limpiamos inputs y errores al cerrar
            inputLogin.text = "";
            inputPassword.text = "";
            textoError.text = "";
            panelLogin.SetActive(false);
        }
    }
}
