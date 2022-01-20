import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { FaCartPlus, FaSearch, FaSignOutAlt } from "react-icons/fa";

// interface IconesProps {
//   oculto: boolean;
// }

export const Icones = () => {
  const [oculto, setOculto] = useState(false);
  const Ocultar = () => {
    setOculto(!oculto);
  };
  return (
    <Flex w="200px" h="50px" justifyContent="space-evenly">
      <Box as="button" cursor="pointer" onClick={() => Ocultar()}>
        <FaSearch size={30} />
      </Box>
      <Box as="button" cursor="pointer">
        <FaCartPlus size={30} />
      </Box>
      <Box as="button" cursor="pointer">
        <FaSignOutAlt size={30} />
      </Box>
    </Flex>
  );
};
