import { Flex, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      as="header"
      h={["12vh"]}
      w={["300px", "300px", "300px", "400px"]}
      margin="auto"
    >
      <Flex
        w="100%"
        justifyContent="flex-start"
        alignItems="baseline"
        margin="auto"
      >
        <Heading
          as="h1"
          textAlign="right"
          paddingRight="7px"
          color="cinza.600"
          fontSize={["32px", "32px", "36px", "48px"]}
        >
          Burguer
        </Heading>
        <Heading
          textAlign="left"
          paddingLeft="7px"
          fontSize={["18px", "18px", "20px", "26px"]}
          color="main.secondary"
        >
          Kenzie
        </Heading>
      </Flex>
    </Flex>
  );
};
