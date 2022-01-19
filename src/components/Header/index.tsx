import { Flex, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex as="header" h={["12vh"]} w="300px" margin="auto">
      <Flex
        w={["300px", "300px", "500px", "500px"]}
        justifyContent="flex-start"
        alignItems="baseline"
        margin="auto"
      >
        <Heading as="h1" textAlign="right" paddingRight="7px" color="cinza.600">
          Burguer
        </Heading>
        <Heading
          textAlign="left"
          paddingLeft="7px"
          size="md"
          color="main.secondary"
        >
          Kenzie
        </Heading>
      </Flex>
    </Flex>
  );
};
