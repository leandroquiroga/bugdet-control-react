import React from 'react';
import { NoPayments } from './NoPayments';
import { Gasto } from './Gasto';

export const GastosCreados = (props) => {

  const {
    arrExpenses,
    srcImage,
    titleGastos,
    deleteExpenses,
    setExpenseEdit
  } = props;

  return (
    <article>
      {
        ( arrExpenses.length < 1 ) ? 
          <NoPayments
              title={titleGastos}
              srcImage={srcImage}
          />
        :
          // Chequea que el arrglo de gastos no este vacio, si no esta vacio
          // crea un nuevo arreglo con cada objeto de gastos para
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
    </article>
  );
};
