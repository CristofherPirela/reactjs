import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../mocks/products';
import Item from './Item';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProductsByCategory(id).then(productos => setProductos(productos));
    } else {
      getProducts().then(productos => setProductos(productos));
    }
  }, [id]);

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <div>
        {productos.map(producto => (
          <Item key={producto.id} {...producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

