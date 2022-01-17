import { Button, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  return (
    <>
      <Text>Login</Text>
      <Button onClick={() => history.push("/home")}>Home</Button>
      <Button onClick={() => history.push("/signup")}>Cadastro</Button>
    </>
  );
};
