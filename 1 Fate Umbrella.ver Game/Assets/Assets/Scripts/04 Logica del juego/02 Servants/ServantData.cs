using System.Collections.Generic;

public class ServantData
{
    // IDs para Referencia 
    public string UserServantId; // El ID de la instancia de este Servant para el usuario (No existe en la API, pero es útil)
    public string ServantBaseId; // ID del Servant Base (ej: "3")

    // Datos de Usuario (ServantUsuarioAPI) 
    public int Level;
    public int Exp;
    public int Ascension;
    public int Skill1Level;
    public int Skill2Level;
    public int Skill3Level;

    // Datos de Base (ServantBaseAPI) 
    public string Name;
    public string Class;
    public int Rank;
    public string PictureName;
    public string FrontName;

    // Stats
    public int BaseATK;
    public int BaseHP;
    public float NPGain;

    // Habilidades
    public ServantSkill[] Skills; // Copia del array de ServantBaseAPI
    public PassiveSkill[] Passives; // Copia del array de ServantBaseAPI

    // Noble Phantasm
    public string NPName;
    public string NPEffect;

    // Campos Calculados (Opcional, pero vital) 
    public int TotalATK;
    public int TotalHP;

}