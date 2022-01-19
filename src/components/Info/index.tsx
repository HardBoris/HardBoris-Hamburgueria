import { Flex, Text } from "@chakra-ui/react";
import { FaHamburger } from "react-icons/fa";
import { theme } from "../../styles/theme";

export const Info = () => {
  return (
    <Flex
      border="1px solid"
      borderColor="cinza.100"
      borderRadius="md"
      h={["12vh"]}
      w="300px"
      margin="auto"
    >
      <Flex
        w="70px"
        h="70px"
        justifyContent="center"
        alignItems="center"
        margin="auto"
        textAlign="center"
      >
        <FaHamburger color={theme.colors.main.primary} size="80px" />
      </Flex>
      <Flex
        w="200px"
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
