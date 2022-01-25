import React from 'react';

export const ControlExpenses = ({ valueExpenses }) => {
    
    // formatCurrency recibe el valor de nuestro state
    // formateado a tipo number para retornarlo 
    // en un formato adecuado a la moneda local
    
    const formatCurrency = (mount) => mount.toLocaleString('es-AR', { style: 'currency', currency: 'ARG',});
    
    return (
        <section className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <article>
                <p>Grafica aqui</p>
            </article>

            <article className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto:</span> {formatCurrency(Number(valueExpenses))}
                </p>
                <p>
                    <span>Disponible:</span> {formatCurrency(0)}
                </p>
                <p>
                    <span>Gastado:</span> {formatCurrency(0)}
                </p>
            </article>
        </section>
    );
};
