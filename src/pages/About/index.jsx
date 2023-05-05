import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../styles/Buttons";
import { Container } from "./styles";

import { useAuthValue } from "../../contexts/AuthContext"

export const About = () => {

  const navigateTo = useNavigate();
  const user = useAuthValue();

  return (
    <Container>
      <h2>Sobre o Mini <span>Blog</span> </h2>
      <p>Este projeto consiste em um blog feito com React no front-end e Firebase no back-end</p>
      
      <Button 
        variant="green" 
        onClick={() => {
          navigateTo(user ? '/posts/create' : '/login');
        }}
      >
        Criar Post
      </Button>
    </Container>
  );
};
