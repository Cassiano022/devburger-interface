import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
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


export function Register() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required("Campo obrigatório"),
      email: yup.string().email("Email inválido").required("Campo obrigatório"),
      password: yup.string().min(6, "A senha deve conter ao menos 6 caracteres").required("Campo obrigatório"),
      confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais').required("Campo obrigatório"),
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
    try { const { status } = await api.post("/users", {
      name: data.name,
      email: data.email,
      password: data.password,
    }, {
      validateStatus: (status) => true,

    },
  );
   if (status === 200 || status === 201) {
    setTimeout(() => {
      navigate("/login");
    }, 2000);

    toast.success("Cadastro realizado com sucesso!");
   } else if (status === 409) {
    toast.error("Email já cadastrado!");
   }else {
    throw new Error("Erro inesperado");
   }
      
    }catch (error) {"falha ao cadastrar"}
    
  };

  return (
    <Container>
      <LeftContainer>
        <img src={logo} alt="Logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Crie Sua Conta
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Name</label>
            <input type="text" {...register("name")} />
            <p>{errors?.name?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Email</label>
            <input type="text" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>confirma Senha</label>
            <input type="password" {...register("confirmpassword")} />
            <p>{errors?.confi?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>
        <p>
         já possui conta? <Link to={"/login"}>Clique aqui</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
