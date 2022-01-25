import React from 'react';
import closeModal from './../../img/cerrar.svg'

export const Modal = (props) => {

    const { animateModal, setModal, setAnimateModal } = props;
    const handleCloseModal = () => {
        setAnimateModal(false);

        setTimeout(() => {
            setModal(false);
        }, 800)
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

            <form className={`formulario ${animateModal ? "animar" : "cerrar"}`}>
                <legend>Nuevo Gasto</legend>
            </form>
        </section>
    );
};
