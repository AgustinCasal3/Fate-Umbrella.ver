using System;
using UnityEngine;

[System.Serializable]
public class StageInfo
{
    public int stage;
    public string name;
}

[System.Serializable]
public class BaseStats
{
    public int atk;
    public int hp;
    public float npGain;
}

[System.Serializable]
public class ServantSkill
{
    // Mapea la estructura de skills: Array de Objetos
    public string name;
    public string type;
    public string effect;
    public int cooldown;
    public string target;
}

[System.Serializable]
public class PassiveSkill
{
    // Mapea la estructura de passives: Array de Objetos
    public string name;
    public string effect;
}

[System.Serializable]
public class OverchargeEffect
{
    public object effect; 
}

[System.Serializable]
public class NPBase
{
    public string name;
    public string effect;
    public string type; // ST Buster, AoE Quick, etc.
    public OverchargeEffect overcharge;
    public object craftEsenceSlot; // Mapeado como object ya que es 'null' o puede variar
}

// --- Clase Principal (Servant Base) ---

[System.Serializable]
public class ServantBaseAPI
{
    
    public string servantsId;

    public string name;
    public string @class;
    public int rank;
    public string picture; // Imagen para la lista
    public string front; // Imagen frontal

    public StageInfo[] stages;
    public BaseStats baseStats;
    public ServantSkill[] skills;
    public PassiveSkill[] passives;
    public NPBase np;
}