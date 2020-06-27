import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <span className="brand-logo">&nbsp;Clientes</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/registro">Registro</NavLink>
          </li>
          <li>
            <NavLink to="/busqueda">Buscar por Edad</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
