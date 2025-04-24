import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

import logo from "../../assets/logo1.svg";
import { Button } from "../../componets/Button";
import { api } from "../../services/api";

import {
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
  Container,
  Link,
} from "./styles";

export function Login() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup.string().email("Email inválido").required("Campo obrigatório"),
      password: yup
        .string()
        .min(6, "A senha deve conter ao menos 6 caracteres")
        .required("Campo obrigatório"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
    const {
      data: { token },
    } = await toast.promise(
      api.post("/sessions", {
        email: data.email,
        password: data.password,
      }),
      {
        pending: "Fazendo login...",
        success: {
          render() {
            setTimeout(() => {
              navigate("/");
            }, 2000);
            return "Login realizado com sucesso!";
          },
        },
        error: "Erro ao fazer login!",
      }
    );
    localStorage.setItem("token", token);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={logo} alt="Logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burger!</span>
          <br />
          Acesso com seu <span>Login e Senha</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          Não possui conta? <Link to={"/cadastro"}>Clique aqui</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
