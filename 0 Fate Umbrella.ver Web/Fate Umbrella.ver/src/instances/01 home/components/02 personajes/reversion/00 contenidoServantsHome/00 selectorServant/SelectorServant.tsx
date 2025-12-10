import './SelectorServant.css';
import { useState } from 'react';

interface ServantInfo {
    id: string,
    class: string,
    name: string,
    CV: string,
    illustrator: string,
    description: string[],
    npVideo: string,
    sprite: string,
    pfp: string
}

interface SelectorServantProps {
    servants: ServantInfo[];
    onServantChange?: (servant: ServantInfo) => void;
}

export function SelectorServant({ servants, onServantChange }: SelectorServantProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    if (!servants || servants.length === 0) {
        return <div className="noHayServants">Error cargando servants</div>;
    }

    const handleServantClick = (index: number) => {
        setSelectedIndex(index);
        if (onServantChange) {
            onServantChange(servants[index]);
        }
    };

    return (
        <>
            <div className="selectorServant">
                {servants.map((servant, index) => {
                    const isSelected = index === selectedIndex;
                    
                    return (
                        <div 
                            key={servant.id}
                            className={`opcionServant ${isSelected ? 'opcionServantSeleccionada' : ''}`}
                            onClick={() => handleServantClick(index)}
                        >
                            <img src={`../../../../../imgs/Home/Servants/Icons/${servant.pfp}.png`} alt={servant.name} />
                        </div>
                    );
                })}
            </div>
        </>
    )
}