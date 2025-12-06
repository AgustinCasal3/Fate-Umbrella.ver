using UnityEngine;
using UnityEngine.SceneManagement;
using TMPro; 

public class TituloController : MonoBehaviour
{

    public void OnClickBotonInvisible()
    {

        string idACargar = PlayerPrefs.GetString("SavedUserId", "");

        if (string.IsNullOrEmpty(idACargar))
        {
            // 2. Si NO hay sesión, usamos el ID de prueba del APIManager.
            if (APIManager.Instancia != null)
            {
                idACargar = APIManager.Instancia.idUsuarioPrueba;
                Debug.Log("No hay sesión guardada. Cargando perfil de prueba (ID: " + idACargar + ")");
            }
            else
            {
                Debug.LogError("APIManager no encontrado. No se puede cargar el perfil de prueba.");
                SceneManager.LoadScene("Escena_MenuPrincipal");
                return;
            }
        }
        else
        {
            Debug.Log("Sesión encontrada. Cargando perfil del último usuario (ID: " + idACargar + ")");
        }

        APIManager.Instancia.IniciarCargaDeDatos(idACargar);

        if (APIManager.Instancia.controlTransicion != null)
        {
            APIManager.Instancia.controlTransicion.IniciarTransicion("Escena_MenuPrincipal");
        }
        else
        {
            SceneManager.LoadScene("Escena_MenuPrincipal");
        }
    }
}