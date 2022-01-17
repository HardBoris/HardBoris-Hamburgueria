import { Button, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const Signup = () => {
  const history = useHistory();
  return (
    <>
      <Text>Signup</Text>
      <Button onClick={() => history.push("/home")}>Home</Button>
      <Button onClick={() => history.push("/")}>Login</Button>
    </>
  );
};
