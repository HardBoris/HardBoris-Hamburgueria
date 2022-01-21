import { Box, Flex } from "@chakra-ui/react";
import { FaCartPlus, FaSearch, FaSignOutAlt } from "react-icons/fa";

interface IconesProps {
  salir: () => void;
  mostrar: () => void;
  abrir: () => void;
  oculto?: boolean;
}

export const Icones = ({ salir, abrir, mostrar, oculto }: IconesProps) => {
  return (
    <Flex
      id="icones"
      w={["120px", "120px", "120px", "120px"]}
      h="12vh"
      justifyContent="space-evenly"
      display={[
        `${oculto ? "flex" : "none"}`,
        `${oculto ? "flex" : "none"}`,
        "flex",
        "flex",
      ]}
    >
      <Box
        as="button"
        cursor="pointer"
        fontSize={["20px", "20px", "25px", "30px"]}
        onClick={mostrar}
        display={["block", "block", "none", "none"]}
      >
        <FaSearch />
      </Box>

      <Box
        as="button"
        cursor="pointer"
        fontSize={["20px", "20px", "25px", "30px"]}
        onClick={abrir}
      >
        <FaCartPlus />
      </Box>
      <Box
        as="button"
        cursor="pointer"
        fontSize={["20px", "20px", "25px", "30px"]}
        onClick={salir}
      >
        <FaSignOutAlt />
      </Box>
    </Flex>
  );
};
