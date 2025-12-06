import './Empleados.css';

import { useEffect, useState } from 'react';
import axios from 'axios'

interface Empleado {
    id: string,
    name: string,
    link: string
}

export function Empleados() {

    const [empleados, setEmpleados] = useState<Empleado[]>([]);
    
    async function fetchEmpleados() {
        const backendURL = `${window.location.protocol}//${window.location.hostname}:3001`;
        const res = await axios.get(`${backendURL}/empleados`);
        return res.data;
    }

    useEffect(() => {
        fetchEmpleados().then(data => {
            setEmpleados(data);
        })
        .catch(err => {
            console.error("Error cargando Empleados:", err);
        });
    }, [empleados]);

    return (
        <>
            <div className="empleadosEmpresa">
                {!empleados && (
                    <div className="loading">
                        <h1>Cargando empleados...</h1>
                    </div>
                )}

                {/* Componente empleado */} 
                {empleados && empleados.map(e => (
                    <a href={e.link} target='_blank' className="empleado">
                        <img src={`../../../imgs/Empresa/Workers/${e.name}.png`} alt={`Foto de ${e.name}`} />
                        <span>{e.name}</span>
                    </a>
                ))}
            </div>
        </>
    )
}