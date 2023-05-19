import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthValue } from "../contexts/AuthContext"

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { CreatePost } from "../pages/CreatePost";
import { Dashboard } from "../pages/Dashboard";
import { Search } from "../pages/Search";
import { Post } from "../pages/Post";
import { EditPost } from "../pages/EditPost";

export const Routers = ({ children }) => {
  const user = useAuthValue();
  
  return (
    <BrowserRouter>
      {children}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/post/:id" element={<Post />} />
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
            path="/post/edit/:id" 
            element={user ? <EditPost /> : <Navigate to="/" />} 
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
