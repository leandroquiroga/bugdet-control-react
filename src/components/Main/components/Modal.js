import React, { useState, useEffect } from 'react';
import closeModal from './../../../img/cerrar.svg'
import { ErrorInput } from './../../Header/components/ErrorInput';

export const Modal = (props) => {

    const [name, setName] = useState('');
    const [mount, setMount] = useState('');
    const [category, setCategory] = useState('');
    const [id, setId] = useState('');
    const [date, setDate] = useState('');
    const [messgeError, setMessgeError] = useState('');

    const {
        animateModal,
        setModal,
        setAnimateModal,
        saveExpenses,
        expenesEdit,
        setExpenseEdit
    } = props;

    // Este useEffec va a controlar si el objeto expensesEdit
    // viene vacio o no, si este objeto no viene vacio
    // volvamos a cargar cada uno de los campos del formularios
    useEffect(() => {
        if (Object.keys(expenesEdit).length > 0) {
            const { name, mount, category, id, date } = expenesEdit;
            setName(name);
            setMount(mount);
            setCategory(category);
            setId(id);
            setDate(date)
        }
    },[])
    // Descativa el modal, volviendo los valores del state por defecto.
    const handleCloseModal = () => {
        setAnimateModal(false);
        setExpenseEdit({})
        setTimeout(() => {
            setModal(false);
        }, 800);
    };

    // Envia los dataos del formulario atravez de un objeto que se 
    // encuentra en el componente principal.
    const handleSubmit = (e) => {
        e.preventDefault();

        // Valida que los valores de los state no se encuentren vacios.
        if ([name, mount, category].includes('')) {
            setMessgeError('Todos los campos son obligatorios');
            
            setTimeout(() => {
                setMessgeError('')
            },2500)
            return
        }

        // Elimina el Error y genera un nuevo objeto de gastos.
        setMessgeError('');
        saveExpenses({ name, mount, category, id, date });


        // Cierra el modal una vez ingresados los nuevos datos. 
        setAnimateModal(false);

        setTimeout(() => {
            setModal(false);
        }, 800);
    }

    return (
        <section className='modal'>
            <div className='cerrar-modal'>
                <img 
                    src={closeModal}
                    alt='close modal'
                    onClick={handleCloseModal}
                />
            </div>

            <form
                className={`formulario ${animateModal ? "animar" : "cerrar"}`}
                onSubmit={handleSubmit}
            >
                <legend>{ (expenesEdit.name) ? 'Editar Gasto' : 'Nuevo Gasto' }</legend>
                
                {messgeError && <ErrorInput errMessage={messgeError} />}

                <div className='campo'>
                    <label htmlFor="name"> Nombre: </label>

                    <input 
                        id='name'
                        type='text'
                        placeholder='Ingrese el nombre de campo'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="mount"> Cantidad: </label>

                    <input 
                        autoFocus
                        autoComplete='false'
                        id='mount'
                        type='number'
                        placeholder='Ingrese el nombre de campo'
                        value={mount}
                        onChange={e => setMount(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="category"> Categoria: </label>

                    <select 
                        id='category'
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value=''> --- Seleccione ---</option>
                        <option value='ahorro'> Ahorro </option>
                        <option value='comida'> Comida </option>
                        <option value='casa'> Casa </option>
                        <option value='varios'> Gastos Varios </option>
                        <option value='propios'> Gastos Propios </option>
                        <option value='salud'> Salud </option>
                        <option value='subscripciones'> Suscripciones </option>
                    </select>
                </div>

                <input  
                    type='submit'
                    value={(expenesEdit.name) ? 'Actualizar Gasto' : 'Añadir Gasto'}
                />
            </form>
        </section>
    );
};
