import React, { Fragment, useState} from 'react';
import { Header } from './components/Header/Header';
import { useForm } from './hooks/useForm';
import iconSVGNewExpense from './img/nuevo-gasto.svg';
import { Modal } from './components/Modal/Modal';

export const ControlGastos = () => {
    const [ valueExpenses, setForm, resetForm ] = useForm(0);
    const [ isValidExpenses, setIsValidExpenses ] = useState(false);
    const [modal, setModal] = useState(false);
    const [animateModal, setAnimateModal] = useState(false)

    const handleNewExpenses = () => {
        setModal(true);

        setTimeout(() => {
            setAnimateModal(true)
        }, 800);
    }
      
    return (
        <Fragment>
            <Header
                title='Planificar Gastos'
                valueExpenses={valueExpenses}
                setForm={setForm}
                resetForm={resetForm}
                isValidExpenses={isValidExpenses}
                setIsValidExpenses={setIsValidExpenses}
            />

            {isValidExpenses && (
                <div className='nuevo-gasto'>
                    <img
                        src={iconSVGNewExpense}
                        alt='icon new expense'
                        onClick={handleNewExpenses}
                    />    
                </div>   
            )}

            {modal &&
                <Modal
                    animateModal={animateModal}
                    setModal={setModal}
                    setAnimateModal={setAnimateModal}
                />
            }
        </Fragment>
    );
};
