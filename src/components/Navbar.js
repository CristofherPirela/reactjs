import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1><Link to="/">Tienda en Línea</Link></h1>
      <ul>
        <li><Link to="/category/ropa">Ropa</Link></li>
        <li><Link to="/category/calzado">Calzado</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
