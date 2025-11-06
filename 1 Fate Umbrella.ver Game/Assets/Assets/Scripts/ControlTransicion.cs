using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class ControlTransicion : MonoBehaviour
{
    public Image panelFondo;
    public float tiempoFundido = 0.8f;

    void Awake()
    {
        DontDestroyOnLoad(gameObject);
    }

    void Start()
    {
        if (panelFondo.color.a == 1f)
        {
            StartCoroutine(Fundido(0f));
        }
    }
    public void IniciarTransicion(string nombreEscena)
    {
        StopAllCoroutines();
        StartCoroutine(FundirYCargar(nombreEscena));
    }

    IEnumerator FundirYCargar(string escenaDestino)
    {
        yield return StartCoroutine(Fundido(1f));

        SceneManager.LoadScene(escenaDestino);
    }

    IEnumerator Fundido(float opacidadObjetivo)
    {
        float opacidadActual = panelFondo.color.a;
        float tiempo = 0f;

        while (tiempo < tiempoFundido)
        {
            tiempo += Time.deltaTime;
            float nuevaOpacidad = Mathf.Lerp(opacidadActual, opacidadObjetivo, tiempo / tiempoFundido);

            Color c = panelFondo.color;
            c.a = nuevaOpacidad;
            panelFondo.color = c;

            yield return null;
        }

        // Asegura que el valor final sea exacto (0 o 1)
        Color cFinal = panelFondo.color;
        cFinal.a = opacidadObjetivo;
        panelFondo.color = cFinal;

        if (opacidadObjetivo == 0f)
        {
            panelFondo.gameObject.SetActive(false);
        }
        else if (opacidadObjetivo == 1f)
        {
            panelFondo.gameObject.SetActive(true);
        }
    }
}