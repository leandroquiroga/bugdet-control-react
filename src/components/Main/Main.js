import React from 'react';
import { ListadoGastos } from './components/ListadoGastos';
import { Modal } from './components/Modal';
import iconSVGNewExpense from '../../img/nuevo-gasto.svg';
import { FilterCategory } from './components/FilterCategory';


export const Main = (props) => {

  const {
    animateModal,
    modal,
    setModal,
    setAnimateModal,
    saveExpenses,
    arrExpenses,
    setExpenseEdit,
    expenesEdit,
    deleteExpenses,
    percentage,
    filterCategory,
    setFilterCategory,
    filterExpenses,
  } = props;
  
  // Activa el modal y aploca la animacion correspondiente.
  const handleNewExpenses = () => {
    setModal(true);
    setExpenseEdit({})

    setTimeout(() => {
        setAnimateModal(true);
    }, 800);
  }
  return (
    <main>
      <FilterCategory
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <ListadoGastos
        arrExpenses={arrExpenses} 
        setExpenseEdit={setExpenseEdit}
        deleteExpenses={deleteExpenses}
        filterExpenses={filterExpenses}
        filterCategory={filterCategory}
      /> 


      {  (percentage < 100) && 
          <section className='nuevo-gasto'>
            <img
              src={iconSVGNewExpense}
              alt='icon new expense'
              onClick={handleNewExpenses}
            />    
          </section>   
      }

      {modal &&
        <Modal
          animateModal={animateModal}
          setModal={setModal}
          setAnimateModal={setAnimateModal}
          saveExpenses={saveExpenses}
          expenesEdit={expenesEdit}
          setExpenseEdit={setExpenseEdit}
        />
      }
      </main>
    );
};
