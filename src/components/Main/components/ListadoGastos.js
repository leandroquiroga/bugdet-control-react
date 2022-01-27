import React from 'react';
import { NoPayments } from './NoPayments';
import { Gasto } from './Gasto';
import iconPayments from './../../../img/icon_payments.svg';

export const ListadoGastos = (props) => {

    const { arrExpenses, setExpenseEdit, deleteExpenses } = props
    return (
        <section className='listado-gastos contenedor'>
            {
                // Chequea que el arrglo de gastos no este vacio
                (arrExpenses.length === 0) ? 
                        <NoPayments
                            title='No se han registrados gastos'
                            srcImage={iconPayments}
                        />
                    :   
                        // Crea un nuevo arreglo con cada objeto de gastos para
                        // pintarlo en el html
                        arrExpenses.map(expense => (
                            <Gasto
                                key={expense.id}
                                expense={expense}
                                setExpenseEdit={setExpenseEdit}
                                deleteExpenses={deleteExpenses}
                            />
                        ))
            } 
        </section>
    );
};
