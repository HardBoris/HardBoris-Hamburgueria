import { Button, Flex, Heading, Link, VStack } from "@chakra-ui/react";
import { DeepMap, FieldError, FieldValues } from "react-hook-form";
import { Formulario } from "../../components/Formulario";
import { Input } from "../../components/Formulario/Input";

interface LoginFormProps {
  Registrar: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: any;
  wrong: string;
}

export const SignupForm = ({
  Registrar,
  errors,
  register,
  wrong,
}: LoginFormProps) => {
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
          bg={wrong ? "status.negative" : "cinza.0"}
          w="100%"
          h="60px"
          color={wrong ? "cinza.0" : "cinza.300"}
          _hover={{ bg: "cinza.300", color: "cinza.0" }}
        >
          {wrong ? "Email já cadastrado. F5 para tentar de novo!" : "Cadastrar"}
        </Button>
      </VStack>
    </Formulario>
  );
};
