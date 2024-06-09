const productos = [
  { id: 1, nombre: 'Camisa', precio: 20, categoria: 'ropa' },
  { id: 2, nombre: 'Pantalón', precio: 30, categoria: 'ropa' },
  { id: 3, nombre: 'Zapatos', precio: 50, categoria: 'calzado' }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find(producto => producto.id === parseInt(id)));
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter(producto => producto.categoria === categoryId));
    }, 1000);
  });
};
