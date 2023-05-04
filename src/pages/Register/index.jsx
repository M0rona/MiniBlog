import { useState, useEffect } from "react";

import { Button } from "../../styles/Buttons";

import { Container } from "./styles";
import { useAuthentication } from "../../hooks/useAuthentication";

export const Register = () => {
  const [dataForms, setDataForms] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  });

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (dataForms.password !== dataForms.confirmPassword) {
      setDataForms({
        ...dataForms,
        error: "As senhas precisam ser iguais!"
      })

      return;
    }

    setDataForms({
      ...dataForms,
      error: ""
    })

    const user = {
      displayName: dataForms.displayName,
      email: dataForms.email,
      password: dataForms.password,
    };

    const res = await createUser(user)

    console.log(res);

  };

  useEffect(() => {

    if(authError) {
      setDataForms({
        ...dataForms,
        error: authError
      })
    }
  
  }, [authError])

  return (
    <Container>
      <h3>Cadastre-se para postar</h3>
      <p>Crie seu usuário e compartilhe suas histórias</p>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            id="displayName"
            placeholder="Nome do usuário"
            required
            value={dataForms.displayName}
            onChange={(e) =>
              setDataForms({
                ...dataForms,
                displayName: e.target.value,
              })
            }
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
            value={dataForms.email}
            onChange={(e) =>
              setDataForms({
                ...dataForms,
                email: e.target.value,
              })
            }
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
            value={dataForms.password}
            onChange={(e) =>
              setDataForms({
                ...dataForms,
                password: e.target.value,
              })
            }
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
            value={dataForms.confirmPassword}
            onChange={(e) =>
              setDataForms({
                ...dataForms,
                confirmPassword: e.target.value,
              })
            }
          />
        </label>

        { !loading && <Button type="submit" variant="green">Cadastrar</Button> }
        { loading && <Button type="submit" variant="green" disabled>Aguarde...</Button> }

        {dataForms.error && <p className="error">{dataForms.error}</p> }
      </form>
    </Container>
  );
};
