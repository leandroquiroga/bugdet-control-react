import iconAhorro from '../img/icono_ahorro.svg';
import iconCasa from '../img/icono_casa.svg';
import iconComida from '../img/icono_comida.svg';
import iconGastos from '../img/icono_gastos.svg';
import iconPropios from '../img/icono_ocio.svg';
import iconSalud from '../img/icono_salud.svg';
import iconSubs from '../img/icono_suscripciones.svg'; 

// Crea un ID unico
export const idUnique = () => Math.random().toString(35).substring(2);


// Retorna la fecha modificada 
export const formatDate = () => {
    const date = new Date();

    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    };

    return date.toLocaleDateString('es-Es', options);
}

// Este objeto escreado para poder utilizar los icons de 
// forma dinamica segun su categoria correspondiente
export const direccionarIcons = {
    ahorro: iconAhorro,
    comida: iconComida,
    casa: iconCasa,
    varios: iconGastos,
    propios: iconPropios,
    salud: iconSalud,
    subscripciones: iconSubs,
}


// formatCurrency recibe el valor de nuestro state
// formateado a tipo number para retornarlo 
// en un formato adecuado a la moneda local
export const formatCurrency = (mount) => mount.toLocaleString('es-AR', { style: 'currency', currency: 'ARG', });


//Si el porcentaje es menor a 50% cambia el color a yellow,
//si es menor a 15 % cambia el color a rojo
export const changeColorProgressBar = (value) => {

    let color; 
    if (value < 50) {
        color = '#0353a4'
    } else if (value >= 50 && value < 84) {
       color = '#f9c74f'
    } else if (value >= 85) {
        color = '#d00000';
    }

    return color;
}