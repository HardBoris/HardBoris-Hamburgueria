import { Button, Flex, Image, Text } from "@chakra-ui/react";

interface ProductProps {
  name: string;
  category: string;
  price: number;
  img: string;
}

export const Product = ({ name, category, price, img }: ProductProps) => {
  return (
    <Flex
      w="300px"
      h="350px"
      flexDirection="column"
      border="3px solid"
      borderColor="cinza.100"
      borderRadius="lg"
      marginTop="25px"
    >
      <Flex h="40%" justifyContent="center" alignItems="center" bg="cinza.0">
        <Image src={img} />
      </Flex>
      <Flex
        h="60%"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        padding="20px"
      >
        <Text>{name}</Text>
        <Text>{category}</Text>
        <Text>R$ {price.toFixed(2)}</Text>
        <Button
          type="button"
          bg="main.primary"
          w="50%"
          h="40px"
          color="cinza.0"
          _hover={{ bg: "shadow.verde", color: "cinza.0" }}
          onClick={() => {}}
        >
          Adicionar
        </Button>
      </Flex>
    </Flex>
  );
};
