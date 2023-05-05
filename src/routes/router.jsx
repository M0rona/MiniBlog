import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthValue } from "../contexts/AuthContext"

import { Home } from "../pages/home";
import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { CreatePost } from "../pages/CreatePost";
import { Dashboard } from "../pages/Dashboard";

export const Routers = ({ children }) => {
  const user = useAuthValue();
  
  return (
    <BrowserRouter>
      {children}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/login" 
            element={!user ? <Login /> : <Navigate to="/" />} 
          />
          <Route 
            path="/login/register" 
            element={!user ? <Register /> : <Navigate to="/" />} 
          />
          <Route 
            path="/posts/create" 
            element={user ? <CreatePost /> : <Navigate to="/" />} 
          />
          <Route 
            path="/dashboard" 
            element={user ? <Dashboard /> : <Navigate to="/" />} 
          />
        </Routes>
      </main>
     
    </BrowserRouter>
  );
};
