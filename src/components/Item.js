import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio }) => {
  return (
    <div>
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <Link to={`/item/${id}`}>Ver Detalles</Link>
    </div>
  );
};

export default Item;
