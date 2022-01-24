import { Box, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/UserContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Header } from "../../components/Header";
import { LoginForm } from "./LoginForm";
import { Eslogan } from "../../components/Header/Eslogan";

const schema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

interface txtData {
  email: string;
  password: string;
}

export const Login = () => {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<txtData>({
    resolver: yupResolver(schema),
  });

  const Enviar = (data: txtData) => {
    signIn(data).then(() => console.log(data));
  };

  return (
    <Flex
      flexDirection={["column", "column", "row-reverse", "row-reverse"]}
      justifyContent={["", "", "center", "center"]}
      alignItems={["center"]}
      margin="auto"
      h="100vh"
      w={["320px", "320px", "100%", "100%"]}
    >
      <Box paddingLeft={["0", "0", "40px", "80px"]}>
        <Header />
        <Eslogan />
        <Box h={["10px", "10px", "100px", "100px"]}></Box>
      </Box>
      <Box w={["320px", "320px", "320px", "520px"]}>
        <LoginForm
          Enviar={handleSubmit(Enviar)}
          errors={errors}
          register={register}
        />
      </Box>
    </Flex>
  );
};
