import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { DeepMap, FieldError, FieldValues } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Formulario } from "../../components/Formulario";
import { Input } from "../../components/Formulario/Input";

interface LoginFormProps {
  Enviar: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: any;
}

export const LoginForm = ({ Enviar, errors, register }: LoginFormProps) => {
  const history = useHistory();
  return (
    <Formulario onSubmit={Enviar}>
      <Heading size="md">Login</Heading>
      <VStack mt="4" spacing="5">
        <Input
          type="email"
          name="email"
          error={errors.email}
          placeholder="insira seu email"
          register={register}
        />
        <Input
          name="password"
          register={register}
          error={errors.password}
          type="password"
          placeholder="insira sua senha"
        />
      </VStack>
      <VStack mt="4" spacing="5">
        <Button
          type="submit"
          bg="main.primary"
          w="100%"
          h="60px"
          color="cinza.0"
        >
          Entrar
        </Button>
        <Text fontSize="sm" textAlign="center" color="cinza.300">
          Crie sua conta para saborear muitas delicias e matar sua fome!
        </Text>
        <Button
          type="button"
          bg="cinza.0"
          w="100%"
          h="60px"
          color="cinza.300"
          onClick={() => history.push("/signup")}
        >
          Cadastrar
        </Button>
      </VStack>
    </Formulario>
  );
};
