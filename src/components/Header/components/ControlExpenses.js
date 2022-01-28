import React, { Fragment, useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { formatCurrency } from '../../../helpers';
import { changeColorProgressBar } from './../../../helpers/index';
import { ErrorInput } from './ErrorInput';
import Swal from 'sweetalert2'



export const ControlExpenses = (props) => {
  const {
    valueExpenses,
    arrExpenses,
    percentage,
    setPercentage,
    setArrExpenses,
    setIsValidExpenses,
  } = props;

  const [amountAvailable, setAmountAvailable] = useState(0);
  const [amountSpent, setAmountSpent] = useState(0);
  
  //Este useEffect cada vez que detecta un cambio en el arreglo de gastos,
  //en el valor del presupuesto, calcula el gasto acomulado y el porcentaje 
  //el diponible de sueldo y el porcentaje del circle-bar-progress 
  useEffect(() => {
    const totalSpent = arrExpenses.reduce((total, expense) => expense.mount + total, 0);
    const totalAvailable = Number(valueExpenses) - totalSpent;
    const newPercentage = (((Number(valueExpenses) - totalAvailable) / Number(valueExpenses)) * 100).toFixed(2)

    setAmountAvailable(totalAvailable);
    setAmountSpent(totalSpent);

    setTimeout(() => {
        setPercentage(newPercentage);
    }, 1000);
  }, [arrExpenses,valueExpenses, setPercentage]);
 

  // Muestra el modal de SweetAlert2, si acepta reinicia la app
  const handleResetApp = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'button-succes',
        cancelButton: 'button-cancel'
      },
      buttonsStyling: false
    });
    
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro de reiniciar la app ?',
      text: "Por favor, tenga cuidado puede perder todos los datos.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, eliminalo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        setArrExpenses([]);
        setAmountSpent(0);
        setIsValidExpenses(false);
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  return (
    <Fragment>
      <section className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <article>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}% Gastado`}
            styles={buildStyles({
              pathColor: changeColorProgressBar(percentage),
              pathTransitionDuration: 0.5,
              trailColor: '#efefef',
              textColor: changeColorProgressBar(percentage)
            })}
          />
        </article>

        <article className='contenido-presupuesto'>
          <p>
            <span>Presupuesto:</span> {formatCurrency(Number(valueExpenses))}
          </p>
          <p className={`${amountAvailable <= 0 ? 'negativo' : ''}`}>
            <span>Disponible:</span> {formatCurrency(Number(amountAvailable))}
          </p>
          <p>
            <span>Gastado:</span> {formatCurrency(amountSpent)}
          </p>
        </article>
      </section>
      <section className='contenedor-presupuesto contenedor sombra dos-columnas ' >
        { (percentage >= 100) &&
              <ErrorInput errMessage='Te quedaste si presupuesto disponible' />
        }
        { (amountAvailable === 0) &&
            <button
              className='reset-app'
              type='button'
              onClick={handleResetApp}
            >
              Resetear Presupuesto
            </button>
        }
      </section>
    </Fragment>
  );
};
