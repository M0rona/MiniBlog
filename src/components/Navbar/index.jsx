import React from "react";

import { NavLink } from "react-router-dom";

import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../contexts/AuthContext"

import { Container } from "./styles";

export const Navbar = () => {

  const user = useAuthValue();

  const { logout } = useAuthentication()
  
  return (
    <Container>
      <NavLink to="/" className="brand">
        Mini <span>Blog</span>
      </NavLink>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        {!user && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}

        {user && (
          <>
            <li>
              <NavLink to="/posts/create">Novo Post</NavLink>
            </li>

            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </>
        )}

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        {user && (
          <li>
            <button onClick={logout} >Sair</button>
          </li>
        )}
      </ul>
    </Container>
  );
};
