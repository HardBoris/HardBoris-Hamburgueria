import { Box, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Header } from "../../components/Header";
import { Eslogan } from "../../components/Header/Eslogan";
import { SignupForm } from "./SignupForm";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

interface RegistroData {
  name: string;
  email: string;
  password: string;
}

export const Signup = () => {
  const history = useHistory();
  const [wrong, setWrong] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistroData>({
    resolver: yupResolver(schema),
  });

  const Registrar = ({ name, email, password }: RegistroData) => {
    api
      .post("/signup", { name, email, password })
      .then(() => history.push("/"))
      .catch((err) => {
        setWrong(err);
      });
  };

  return (
    <Flex
      flexDirection={["column", "column", "row", "row"]}
      justifyContent={["", "", "center", "center"]}
      alignItems={["center"]}
      margin="auto"
      h="100vh"
      w={["320px", "320px", "100%", "100%"]}
    >
      <Box
        display={["none", "none", "block", "block"]}
        paddingRight={["0", "0", "40px", "80px"]}
      >
        <Header />
        <Eslogan />
        <Box h={["10px", "10px", "100px", "100px"]}></Box>
      </Box>
      <Box
        w={["320px", "320px", "320px", "520px"]}
        margin={["40px 0", "40px 0"]}
      >
        <SignupForm
          Registrar={handleSubmit(Registrar)}
          errors={errors}
          register={register}
          wrong={wrong}
        />
      </Box>
    </Flex>
  );
};
