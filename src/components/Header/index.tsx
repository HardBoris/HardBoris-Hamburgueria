import { Flex, Heading } from "@chakra-ui/react";

interface HeaderProps {
  oculto?: boolean;
}

export const Header = ({ oculto }: HeaderProps) => {
  return (
    <Flex
      as="header"
      h={["12vh"]}
      w={["200px", "200px", "300px", "400px"]}
      // margin="auto"
      display={[
        `${oculto ? "flex" : "none"}`,
        `${oculto ? "flex" : "none"}`,
        "flex",
      ]}
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
          paddingRight="5px"
          color="cinza.600"
          fontSize={["24px", "24px", "28px", "36px"]}
        >
          Burguer
        </Heading>
        <Heading
          textAlign="left"
          paddingLeft="5px"
          fontSize={["12px", "12px", "14px", "18px"]}
          color="main.secondary"
        >
          Kenzie
        </Heading>
      </Flex>
    </Flex>
  );
};
