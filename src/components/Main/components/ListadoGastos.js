import React from 'react';
import { GastosCreados } from './GastosCreados';
import { GastosFiltrados } from './GastosFiltrados';
import iconPayments from '../../../img/icon_payments.svg'


export const ListadoGastos = (props) => {

  const {
    arrExpenses,
    setExpenseEdit,
    deleteExpenses,
    filterExpenses,
    filterCategory,
  } = props;

  return (  
    <section className='listado-gastos contenedor'>

      {filterCategory ?
        (
          <GastosFiltrados
            filterExpenses={filterExpenses}
            srcImage={iconPayments}
            titleNoFiltrados='No se han registrados gastos !'
            titleFiltrados='Gastos'
            setExpenseEdit={setExpenseEdit}
            deleteExpenses={deleteExpenses}
            filterCategory={filterCategory}
          />
        )
      :
        (
          <GastosCreados
            arrExpenses={arrExpenses}
            srcImage={iconPayments}
            titleGastos='No se han registrados gastos !!'
            deleteExpenses={deleteExpenses}
            setExpenseEdit={setExpenseEdit}
          />
        )
      }

    </section>
  )
};