import { Button, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();
  return (
    <>
      <Text>Home</Text>
      <Button onClick={() => history.push("/")}>Login</Button>
      <Button onClick={() => history.push("/signup")}>Cadastro</Button>
    </>
  );
};
