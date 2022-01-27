import React from 'react';
import { direccionarIcons } from './../../../helpers/index';

import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

export const Gasto = (props) => {
    const { expense, setExpenseEdit, deleteExpenses } = props;
    const {
        category,
        name,
        mount,
        id,
        date,
    } = expense;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction
                onClick={() => setExpenseEdit(expense) }
            >
                Editar
            </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                destructive={true}
                onClick={() => deleteExpenses(id)}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    );

    return (
        <SwipeableList>
            
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <article className='gasto sombra'>
                    <div className='contenido-gasto'>

                        <img 
                            src={direccionarIcons[category]}
                            alt='expense icon'
                        />
                        
                        <div className='descripcion-gasto'>
                            <p className='categoria'> {category} </p>
                            <p className='nombre-gasto'> {name} </p>
                            <p className='fecha-gasto'>
                                Agregado el: {''}
                                <span> {date} </span>
                            </p>
                        </div>
                    </div>
                        <p className='cantidad-gasto'> ${mount} </p>
                </article>

            </SwipeableListItem>
        </SwipeableList>
    );
};
