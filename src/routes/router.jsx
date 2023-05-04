import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const Routers = ({ children }) => {
  return (
    <BrowserRouter>
      {children}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/registrar" element={<Register />} />
        </Routes>
      </main>
     
    </BrowserRouter>
  );
};
