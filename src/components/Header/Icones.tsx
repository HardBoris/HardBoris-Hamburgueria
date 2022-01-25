import { Box, Flex, Text } from "@chakra-ui/react";
import { FaCartPlus, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";

interface IconesProps {
  salir: () => void;
  mostrar: () => void;
  abrir: () => void;
  oculto?: boolean;
}

export const Icones = ({ salir, abrir, mostrar, oculto }: IconesProps) => {
  const { long } = useCart();
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
        w={["20px", "20px", "25px", "30px"]}
        cursor="pointer"
        fontSize={["20px", "20px", "25px", "30px"]}
        onClick={abrir}
        position="relative"
      >
        <Flex
          h="15px"
          w="15px"
          justifyContent="center"
          alignItems="center"
          bg="main.primary"
          color="cinza.0"
          fontSize="12px"
          fontWeight="bold"
          borderRadius="50%"
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
          zIndex="2"
          display={long > 0 ? "block" : "none"}
        >
          <Text>{long}</Text>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <FaCartPlus />
        </Flex>
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
