import React from 'react';

export const ErrorInput = ({errMessage}) => {
    return (
        <div className='alerta error'>
            { errMessage }
        </div>
    );
};
