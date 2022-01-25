import React, { useState } from 'react';
import { ErrorInput } from './ErrorInput';

export const NewExpenses = (props) => {
    const [errMessage, setErrMessage] = useState('');
    const {
        nameLabel,
        valueExpenses,
        setForm,
        resetForm,
        setIsValidExpenses
    } = props;


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Number(valueExpenses) || Number(valueExpenses) <= 0) {
            setErrMessage('No es un presupuesto valido');
            resetForm();
            return
        };
        setErrMessage('');
        setIsValidExpenses(true);
    }

    return (
        <div className='contenedor-presupuesto contendor sombra'>
            <form
                className='formulario'
                onSubmit={handleSubmit}
            >
                <div className='campo'>
                    <label
                        htmlFor='presupuesto-form'
                    >
                        {nameLabel}
                    </label>
                    <input 
                        autoFocus={true}
                        autoComplete='false'
                        name='valueExpenses'
                        value={valueExpenses}
                        onChange={setForm}
                        id='presupuesto-form'
                        className="nuevo-presupuesto"
                        type="number"
                        placeholder='Ingresa tu presupuesto'
                    />
                </div>

                <input 
                    type="submit"
                    value="Añadir"
                />
                { errMessage  && <ErrorInput errMessage={ errMessage }/>}
            </form>
        </div>
    );
};
