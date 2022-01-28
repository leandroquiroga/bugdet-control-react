import React, { useEffect, useState} from 'react';
import { Header } from './components/Header/Header';
import { useForm } from './hooks/useForm';
import { formatDate, idUnique } from './helpers/index';
import { Main } from './components/Main/Main';

export const ControlGastos = () => {

  // Custom hooks para el el valor inicial de nuestro presupuesto. 
  const [valueExpenses, setForm, resetForm] = useForm(
    Number(localStorage.getItem('expenseValue')) || 0
  );
  const [isValidExpenses, setIsValidExpenses] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [arrExpenses, setArrExpenses] = useState(
    localStorage.getItem('expenses') ?
      JSON.parse((localStorage.getItem('expenses'))) : []
  );
  const [expenesEdit, setExpenseEdit] = useState({});
  const [percentage, setPercentage] = useState(0);
  const [filterCategory, setFilterCategory] = useState('');
  const [filterExpenses, setFilterExpenses] = useState([]);

  // Este use effect va estar esperando a un cambio en
  // el objeto expensesEdit y va a comprobar su longitud
  // en caso de que su longitud sea mayor a 0, abre el modal 
  // con el formulario con los nuevos valores
  useEffect(() => {
    if (Object.keys(expenesEdit).length > 0) {
      setModal(true);

      setTimeout(() => {
          setAnimateModal(true)
      }, 800);
    }
  }, [expenesEdit]);

  // Almancena el valor del presupuesto en el localStorage
  useEffect(() => {
    localStorage.setItem('expenseValue', valueExpenses ?? 0)
  },[valueExpenses])

  // Verifica que haya una algun presupuesto por unica vez
  // y para mostrar el componente <Main />
  useEffect(() => {
    const expenseLocalStorage = Number(localStorage.getItem('expenseValue')) ?? 0;

    if (expenseLocalStorage > 0) {
        setIsValidExpenses(true)
    }
  },[])

  // Almacena los datos del Array de gastos en el localStorage, cada que
  // se detecte un cambio en el arreglo 
  useEffect(() => {
      localStorage.setItem('expenses', JSON.stringify(arrExpenses))
  },[arrExpenses])
  
  // Se ejecuta por cada vez que filterCategory cambie de valor,
  // asi filtrando todos los elementos de la misma categoria 
  useEffect(() => {
    
    if (filterCategory) {
      const arrCategory = arrExpenses.filter(expense => expense.category === filterCategory);

      setFilterExpenses(arrCategory);
    }
  }, [filterCategory])
  // Esta funcion recibe el objeto que envia el formulario del modal
  // asi almacenandolo en el array de gastos.
  const saveExpenses = (expense) => {

    if (expense.id) {
      // En caso de que editemos algun dato ya existente, retornamos el 
      // objeto editado. 
      
      const upDateExpenses = arrExpenses.map(expenseState => expenseState.id === expense.id ? expense : expenseState);

      setArrExpenses(upDateExpenses);
      setExpenseEdit({})
    } else {
      // En caso de que no exista guardamos el nuevo objeto

      expense.id = idUnique();
      expense.date = formatDate();
      setArrExpenses([...arrExpenses, expense]);
    }

    // Cierra el modal
    setAnimateModal(false);
    setTimeout(() => {
        setModal(false);
    }, 800);
    };

    // Esta funcion recibe un id y elimina el objeto
    // correspondiente de nustro arrgrlo de gastos

    const deleteExpenses = (id) => {

        const arrUpDateExpenses = arrExpenses.filter(expense => expense.id !== id);

        setArrExpenses(arrUpDateExpenses);
    }

    return (
        <div className={modal ? 'fijar' : ''}>
            <Header
              title='Planificar Gastos'
              valueExpenses={valueExpenses}
              setForm={setForm}
              resetForm={resetForm}
              isValidExpenses={isValidExpenses}
              setIsValidExpenses={setIsValidExpenses}
              arrExpenses={arrExpenses}
              percentage={percentage}
              setPercentage={setPercentage}
              setArrExpenses={setArrExpenses}
            />

        {isValidExpenses && (
          <Main
            animateModal={animateModal}
            modal={modal}
            setModal={setModal}
            setAnimateModal={setAnimateModal}
            saveExpenses={saveExpenses}
            arrExpenses={arrExpenses}
            setExpenseEdit={setExpenseEdit}
            expenesEdit={expenesEdit}
            deleteExpenses={deleteExpenses}
            percentage={percentage}
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
            filterExpenses={filterExpenses}
            setFilterExpenses={setFilterExpenses}
          />
            )}
        </div>
    );
}; 