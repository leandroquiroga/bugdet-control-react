# Control de gasto (React + Normalize CSS + localStorage)

Este proyecto realiza la funcionalidad de una billetera virtual
que tiene el control de nuestros gastos, indicando cada gasto realizado, se pueden editar, eliminar hasta filtrar gastos por categoria. Manejamos el localStorage para tener un mejor control de nuestros gastos. 

# Construido con 🛠️
* React.js
* Normalize Css
* localStorage
* React circular progressbar
* React swipeable list
* Sweetalert2

# Funcionalidades ⚙️

## Validacion de el formulario
Este funcion no permite enviar datos vacio, por obligacion se debe enviar al menos un valor numerico mayor a 0

## Control de dinero gastado y disponible
Realiza con calculo en base de nuestro a nuestro dinero inicial, por cada gasto, modificacion o eliminar un gasto estos numeros se actualizan dinamicamente, ademas se actualiza el porcentaje consumido y el estado de nuestro circular progressbar.

## Cambio de color en el progressbar
Este cambio de color se realiza en base a un calculo que si el porcentaje gastado realiza una comprobacion del valor actual y si guarda un color especial. 

## Reiniciar la aplicacion
Al consumir todo el saldo disponible nos mostrara una alerta diciendo que se ha consumido todo el dinero y aparacera un boton que nos va a permitir eliminar (sin antes confirmar) todos los gatos y volver a la app inicial

## Swipear 
Gracias a una bibioteca de react [React Swipeable List](https://www.npmjs.com/package/react-swipeable-list) nos permite realizar deslizar (izquierda o derecha) gastos dependiendo de lo que se desea realizar, editar o eliminar, al editar abrira un modal para que podeamos editar el gasto y para eliminar el gasto desaparece de nuestra lista. 

## Circle Progress Bar
Otra biblioteca especial de react [React Circular Progressbar](https://www.npmjs.com/package/react-circular-progressbar) que nos permite tener un grafica que controla nuestros gastos de forma dinamica. 

## No agregar mas gastos
Al tener la aplicacion sin dinero disponible el boton de agregar gasto desaparece para que tengamos un limite de todos nuestros gasto.


## Busqueda por categoria
Cuando tengamos muchos gastos y querramos buscar uno o varios de una misma categoria podemos filtrar esta busqueda para mejores resultados y una mayor facilidad de uso.

## Resposive
Esta aplicacion esta diseñada para que se pueda usar desde cualquier dispositivo. 
# Deploy 👨‍💻

# Contacto 📫
- [Linkedin](https://www.linkedin.com/in/leanquiroga95/)
- [Email](mailto:leandroquiroga9514@gmail.com)

# Autor 👤
Realizado con ❤️ por [Leandro Quiroga](https://github.com/leandroquiroga);