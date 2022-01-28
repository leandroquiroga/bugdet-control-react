import React, { Fragment } from 'react';
import { Gasto } from './Gasto';
import { NoPayments } from './NoPayments';

export const GastosFiltrados = (props) => {
  const {
    filterExpenses,
    srcImage,
    titleNoFiltrados,
    titleFiltrados,
    setExpenseEdit,
    deleteExpenses,
    filterCategory
  } = props;

  return (
    <article>
      {(filterCategory) ?
        <Fragment>
          <h2 className='gastos-filter--title'>{filterExpenses.length ? titleFiltrados : titleNoFiltrados}</h2>
          {filterExpenses.map(filterExpense => (
              <Gasto
                key={filterExpense.id}
                expense={filterExpense}
                setExpenseEdit={setExpenseEdit}
                deleteExpenses={deleteExpenses}
              />
            ))}
        </Fragment>   
        :

        <NoPayments
          title={titleNoFiltrados}
          srcImage={srcImage}
        />
      }
    </article>
  );
};
