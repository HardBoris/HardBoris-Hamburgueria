import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { DeepMap, FieldError, FieldValues } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Formulario } from "../../components/Formulario";
import { Input } from "../../components/Formulario/Input";
import { useAuth } from "../../contexts/UserContext";

interface LoginFormProps {
  Enviar: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: any;
}

export const LoginForm = ({ Enviar, errors, register }: LoginFormProps) => {
  const history = useHistory();
  const { mensaje } = useAuth();
  return (
    <Formulario onSubmit={Enviar}>
      <Heading size="md">Login</Heading>
      <VStack mt="4" spacing="5">
        <Input
          type="email"
          name="email"
          error={errors.email}
          placeholder={!errors.email ? "Email" : errors.email.message}
          {...register("email")}
        />
        <Input
          name="password"
          {...register("password")}
          error={errors.password}
          type="password"
          placeholder={!errors.email ? "Senha" : errors.password.message}
        />
      </VStack>
      <VStack mt="4" spacing="5">
        <Button
          type="submit"
          bg="main.primary"
          w="100%"
          h="60px"
          color="cinza.0"
          _hover={{ bg: "shadow.verde", color: "cinza.0" }}
        >
          Entrar
        </Button>
        <Text
          fontSize="sm"
          textAlign="center"
          color={mensaje ? "status.negative" : "cinza.300"}
        >
          {mensaje
            ? `${mensaje}`
            : "Crie sua conta para saborear muitas delicias e matar sua fome!"}
        </Text>
        <Button
          type="button"
          bg="cinza.0"
          w="100%"
          h="60px"
          color="cinza.300"
          _hover={{ bg: "cinza.300", color: "cinza.0" }}
          onClick={() => history.push("/signup")}
        >
          Cadastrar
        </Button>
      </VStack>
    </Formulario>
  );
};
