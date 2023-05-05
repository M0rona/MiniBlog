import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

import { Link } from "react-router-dom";

import { Button } from "../../styles/Buttons";
import { Container } from "./styles";

export const Login = () => {

  const [dataForms, setDataForms] = useState({
    email: "",
    password: "",
    error: "",
  });

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDataForms({
      ...dataForms,
      error: ""
    })

    const user = {
      email: dataForms.email,
      password: dataForms.password,
    };

    const res = await login(user)

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
      <h3>Entrar</h3>
      <p>Faça o login para poder utilizar o sistema</p>

      <form onSubmit={handleSubmit}>

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

        {dataForms.error && <p className="error">{dataForms.error}</p> }

        <div>

          { !loading && <Button type="submit" variant="green">Entrar</Button> }
          { loading && <Button type="submit" variant="green" disabled>Aguarde...</Button> }

        </div>
      </form>

      <p>Não possui login? <Link to="/login/register">Registrar</Link> </p>
    </Container>
  );
};
