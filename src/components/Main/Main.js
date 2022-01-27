import React from 'react';
import { ListadoGastos } from './components/ListadoGastos';
import { Modal } from './components/Modal';
import iconSVGNewExpense from '../../img/nuevo-gasto.svg';


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
            <ListadoGastos
                arrExpenses={arrExpenses} 
                setExpenseEdit={setExpenseEdit}
                deleteExpenses={deleteExpenses }
            /> 
            <section className='nuevo-gasto'>
                <img
                    src={iconSVGNewExpense}
                    alt='icon new expense'
                    onClick={handleNewExpenses}
                />    
            </section>   

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
