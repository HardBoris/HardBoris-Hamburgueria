import { Flex, Text } from "@chakra-ui/react";
import { FaHamburger } from "react-icons/fa";
import { theme } from "../../styles/theme";

export const Eslogan = () => {
  return (
    <Flex
      border="1px solid"
      borderColor="cinza.100"
      borderRadius="md"
      h={["12vh"]}
      w={["300px", "300px", "300px", "400px"]}
    >
      <Flex
        w="80px"
        h="80px"
        justifyContent="center"
        alignItems="center"
        margin="auto"
        textAlign="center"
      >
        <FaHamburger color={theme.colors.main.primary} size="50px" />
      </Flex>
      <Flex
        w={["200px", "200px", "200px", "300px"]}
        h="100px"
        justifyContent="center"
        alignItems="center"
        margin="auto"
      >
        <Text fontSize="sm" color="cinza.300">
          A vida é como um sanduíche, é preciso rechea-la com os
          <b> melhores </b>
          ingredientes.
        </Text>
      </Flex>
    </Flex>
  );
};
