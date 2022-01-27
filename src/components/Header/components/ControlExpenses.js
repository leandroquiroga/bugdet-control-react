import React, { useEffect, useState } from 'react';
import { formatCurrency } from '../../../helpers';

export const ControlExpenses = ({ valueExpenses, arrExpenses }) => {

    const [amountAvailable, setAmountAvailable] = useState(0);
    const [amountSpent, setAmountSpent] = useState(0);
    
    useEffect(() => {
        const totalSpent = arrExpenses.reduce((total, expense) => expense.mount + total, 0);
        const totalAvailable = Number(valueExpenses) - totalSpent;
        
        setAmountAvailable(totalAvailable);
        setAmountSpent(totalSpent);

    }, [arrExpenses])
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
                    <span>Disponible:</span> {formatCurrency(Number(amountAvailable))}
                </p>
                <p>
                    <span>Gastado:</span> {formatCurrency(amountSpent)}
                </p>
            </article>
        </section>
    );
};
