using System;
using UnityEngine;

[System.Serializable]
public class SkillsLevel
{
    // Niveles de habilidad que el usuario ha subido
    public int skill1;
    public int skill2;
    public int skill3;
}

[System.Serializable]
public class ServantUsuarioAPI
{
 
    public string userId;       // ID del usuario
    public string servantId;    // ID que vincula a la data base del Servant (ej: "1" o "3")

    public int level;
    public int exp;
    public int ascension;

    public SkillsLevel skillsLevel;

    public string craftEssenceId;
    public string stageSelected; // Stage (skin) seleccionado por el usuario

}