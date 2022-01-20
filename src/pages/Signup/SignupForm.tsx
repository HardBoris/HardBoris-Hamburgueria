import { Button, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { DeepMap, FieldError, FieldValues } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import { Formulario } from "../../components/Formulario";
import { Input } from "../../components/Formulario/Input";

interface LoginFormProps {
  Registrar: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: any;
}

export const SignupForm = ({ Registrar, errors, register }: LoginFormProps) => {
  const history = useHistory();
  return (
    <Formulario onSubmit={Registrar}>
      <Flex justifyContent="space-between">
        <Heading size="md">Cadastro</Heading>
        <Link href="/">Retornar para o Login</Link>
      </Flex>
      <VStack mt="4" spacing="5">
        <Input
          name="name"
          error={errors.name}
          placeholder="Nome"
          {...register("name")}
        />
        <Input
          type="email"
          name="email"
          error={errors.email}
          placeholder="Email"
          {...register("email")}
        />
        <Input
          name="password"
          {...register("password")}
          error={errors.password}
          type="password"
          placeholder="Senha"
        />
        <Input
          name="confirm_password"
          {...register("confirm_password")}
          error={errors.confirm_password}
          type="password"
          placeholder="Confirmar senha"
        />

        <Button
          type="submit"
          bg="cinza.0"
          w="100%"
          h="60px"
          color="cinza.300"
          _hover={{ bg: "cinza.300", color: "cinza.0" }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Formulario>
  );
};
