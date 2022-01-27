import React from 'react';

export const NoPayments = ({title, srcImage}) => {
    return (
        <article>
            <img
                src={srcImage} 
                alt='No expenses'
                className='img-no-gastos'
            />
            <h2 className='no-gastos'>{title}</h2>
        </article>
    );
};
