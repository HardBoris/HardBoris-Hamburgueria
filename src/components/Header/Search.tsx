import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Formulario } from "../Formulario";

interface SearchProps {
  ocultar: () => void;
}

export const Search = ({ ocultar }: SearchProps) => {
  const [busca, setBusca] = useState("");

  return (
    <Flex w="100%" h="12vh" alignItems="center" justifyContent="center">
      <InputGroup w={["300px"]}>
        <Input
          h={["40px", "40px", "60px", "60px"]}
          bg="white"
          name="pesquisa"
          placeholder="Digitar pesquisa"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          focusBorderColor="cinza.600"
        />
        <InputRightElement
          w={["60px", "60px", "80px", "80px"]}
          h={["40px", "40px", "60px", "60px"]}
        >
          <Button
            w={["50px", "50px", "60px", "60px"]}
            h={["30px", "30px", "40px", "40px"]}
            bg="main.primary"
            color="cinza.0"
            _hover={{ bg: "shadow.verde", color: "cinza.0" }}
            onClick={() => {
              ocultar();
              console.log(busca);
            }}
          >
            <FaSearch />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};
