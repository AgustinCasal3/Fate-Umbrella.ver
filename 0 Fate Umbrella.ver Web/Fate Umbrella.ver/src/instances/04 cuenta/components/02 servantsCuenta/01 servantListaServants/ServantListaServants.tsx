import { useState } from 'react'
import './ServantListaServants.css'

// interfaces Servant
interface UserServant {
    userId: string,
    servantId: string,
    level: number,
    exp: number,
    ascension: number,
    skillsLevel: {
        skill1: number,
        skill2: number,
        skill3: number
    },
    craftEssenceId: string | null,
    stageSelected: string
}

interface ServantBase {
    servantsId: string,
    name: string,
    class: string,
    rank:number,
    picture: string,
    front: string,
    baseStats: {
        atk: number,
        hp: number,
        npGain: number,
    }
}

interface CombinedServant {
    userData: UserServant,
    baseData: ServantBase
}

interface ServantListaProps {
    servants: CombinedServant[],
    onSelect: (servant: CombinedServant | null) => void
}

export function ServantListaServants({ servants, onSelect }: ServantListaProps) {

    const [selectedId, setSelectedId] = useState<string | null>(null);

    const handleSelect = (servant: CombinedServant) => {
        setSelectedId(servant.baseData.servantsId);
        onSelect(servant); // 🔥 notifica al padre
    }

    return (
        <>
            {/* Componente Tarjeta Servant */}

            {servants.map((s) => (
                <div
                    key={s.baseData.servantsId}
                    className={`tarjetaServant ${selectedId === s.baseData.servantsId ? "selectedServant" : ""}`}
                    onClick={() => handleSelect(s)}
                >

                    {/* Imagen de clase */}
                    <img
                        src={`../../../imgs/Cuenta/Clases/${s.baseData.class}.png`}
                        alt={s.baseData.class}
                        className="claseServant"
                    />

                    {/* Imagen del Servant */}
                    <img
                        src={`../../../imgs/Cuenta/Pfp/${s.baseData.picture}${s.userData.stageSelected}.png`}
                        alt={s.baseData.name}
                        className="imagenServant"
                    />
                </div>
            ))}
        </>
    )
}