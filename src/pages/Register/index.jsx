import { useState, useEffect } from "react";

import { Button } from "../../styles/Buttons";

import { Container } from "./styles";

export const Register = () => {
  return (
    <Container>
      <h3>Cadastre-se para postar</h3>
      <p>Crie seu usuário e compartilhe suas histórias</p>

      <form>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            id="displayName"
            placeholder="Nome do usuário"
            required
          />
        </label>

        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail do usuário"
            required
          />
        </label>

        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Insira sua senha"
            required
          />
        </label>

        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirme a senha"
            required
          />
        </label>

        <Button type="submit" variant="green">
          Cadastrar
        </Button>
      </form>
    </Container>
  );
};
