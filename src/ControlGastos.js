import React, { useEffect, useState} from 'react';
import { Header } from './components/Header/Header';
import { useForm } from './hooks/useForm';
import { formatDate, idUnique } from './helpers/index';
import { Main } from './components/Main/Main';

export const ControlGastos = () => {
    const [valueExpenses, setForm, resetForm] = useForm(0);
    const [isValidExpenses, setIsValidExpenses] = useState(false);
    const [modal, setModal] = useState(false);
    const [animateModal, setAnimateModal] = useState(false);
    const [arrExpenses, setArrExpenses] = useState([]);
    const [expenesEdit, setExpenseEdit] = useState({});

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
        console.log('elimiando', id);

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
                />
            )}
        </div>
    );
}; 