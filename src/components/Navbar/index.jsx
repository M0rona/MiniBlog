import React from "react";

import { NavLink } from "react-router-dom";
import { Container } from "./styles";

export const Navbar = () => {
  return (
    <Container>
      <NavLink to="/" className="brand">
        Mini <span>Blog</span>
      </NavLink>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/login">Login</NavLink>
        </li>

        <li>
          <NavLink to="/login/registrar">Registrar</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </Container>
  );
};
