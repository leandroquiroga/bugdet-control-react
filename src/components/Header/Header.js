import React from 'react';
import { ControlExpenses } from './components/ControlExpenses';
import { NewExpenses } from './components/NewExpenses';

export const Header = (props) => {

  const {
    title,
    valueExpenses,
    setForm,
    resetForm,
    isValidExpenses,
    setIsValidExpenses,
    arrExpenses
  } = props

  return (
        <header>
          <h1>{title}</h1>
          {
            (isValidExpenses) ? 
                  <ControlExpenses 
                    valueExpenses={valueExpenses}
                    arrExpenses={arrExpenses}
                 />
            :
                  <NewExpenses 
                      nameLabel="Definir presupuesto"
                      valueExpenses={valueExpenses}
                      setForm={setForm}
                      resetForm={resetForm}
                      isValidExpenses={isValidExpenses}
                      setIsValidExpenses={setIsValidExpenses}
          />
          }
        </header>
    );
};
