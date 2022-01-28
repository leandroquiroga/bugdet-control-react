import React from 'react';

export const FilterCategory = ({filterCategory, setFilterCategory}) => {
  return (
    <section className='filtros sombra contenedor'>
      <form>
      <div className='campo'>
        <label htmlFor="category"> Filtar categoria:  </label>

        <select 
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
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
      </form>
    </section>
  );
};
