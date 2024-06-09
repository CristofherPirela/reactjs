import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../mocks/products';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductById(id).then(producto => setProducto(producto));
  }, [id]);

  if (!producto) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>Categoría: {producto.categoria}</p>
    </div>
  );
};

export default ItemDetailContainer;

