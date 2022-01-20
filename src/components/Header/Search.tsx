import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Formulario } from "../Formulario";

export const Search = () => {
  const [busca, setBusca] = useState("");

  return (
    <Formulario border="0">
      <InputGroup w="auto">
        <Input
          h="40px"
          bg="white"
          name="pesquisa"
          placeholder="Digitar pesquisa"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          focusBorderColor="cinza.600"
        />
        <InputRightElement w="60px" h="40px">
          <Button
            w="50px"
            h="30px"
            bg="main.primary"
            color="cinza.0"
            _hover={{ bg: "shadow.verde", color: "cinza.0" }}
            onClick={() => console.log(busca)}
          >
            <FaSearch />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Formulario>
  );
};
