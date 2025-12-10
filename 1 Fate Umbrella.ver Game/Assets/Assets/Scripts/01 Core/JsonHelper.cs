using UnityEngine;
using System.Collections.Generic;

public static class JsonHelper
{
    // Esta clase envuelve el array JSON que proviene de la API.
    [System.Serializable]
    private class Wrapper<T>
    {
        // IMPORTANTE: Este nombre de campo (Items) debe ser la clave usada
        // temporalmente para envolver el JSON.
        public T[] Items;
    }

    // Método principal para deserializar un array JSON
    public static T[] FromJson<T>(string json)
    {
        // 1. Añadimos el objeto contenedor JSON manualmente:
        // Input:   [{"prop": "val"}, {"prop": "val"}]
        // Output:  { "Items": [{"prop": "val"}, {"prop": "val"}] }
        string newJson = "{ \"Items\": " + json + "}";

        // 2. Usamos JsonUtility para deserializar el Wrapper
        Wrapper<T> wrapper = JsonUtility.FromJson<Wrapper<T>>(newJson);

        // 3. Devolvemos el array limpio.
        return wrapper.Items;
    }

    // Puedes agregar un método para serializar a JSON si es necesario.
}
