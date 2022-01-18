import { Button, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Formulario } from "../../components/Formulario";
import { Input } from "../../components/Formulario/Input";
import { useAuth } from "../../contexts/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const signInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

interface txtData {
  email: string;
  password: string;
}

export const Login = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<txtData>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (data: txtData) => {
    signIn(data).then(() => console.log(data));
  };

  return (
    <>
      <Text>Login</Text>
      <Formulario onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          name="email"
          register={register}
          error={errors.email?.message}
          placeholder="insira seu email"
        />
        <Input
          name="password"
          register={register}
          error={errors.password?.message}
          type="password"
          placeholder="insira sua senha"
        />
        <Button type="submit">Enviar</Button>
      </Formulario>
      <Button onClick={() => history.push("/home")}>Home</Button>
      <Button onClick={() => history.push("/signup")}>Cadastro</Button>
    </>
  );
};
