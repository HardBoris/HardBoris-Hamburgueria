import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useCart } from "../../contexts/CartContext";

interface ProductProps {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const Product = ({ id, name, category, price, img }: ProductProps) => {
  const { VentaAdd } = useCart();
  const qty = 1;

  return (
    <Flex
      w="300px"
      h="350px"
      flexDirection="column"
      border="3px solid"
      borderColor="cinza.100"
      borderRadius="lg"
      marginTop="25px"
      transition="1000ms"
      _hover={{
        border: "3px solid",
        borderColor: "main.primary",
      }}
    >
      <Flex h="40%" justifyContent="center" bg="cinza.0" borderTopRadius="lg">
        <Image src={img} objectFit="contain" />
      </Flex>
      <Flex
        h="60%"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        padding="20px"
      >
        <Text fontWeight="bold">{name}</Text>
        <Text>{category}</Text>
        <Text fontWeight="bold" color="main.primary">
          R$ {price.toFixed(2)}
        </Text>
        <Button
          type="button"
          bg="main.primary"
          w="50%"
          h="40px"
          color="cinza.0"
          _hover={{ bg: "shadow.verde", color: "cinza.0" }}
          onClick={() => VentaAdd(id, qty)}
        >
          Adicionar
        </Button>
      </Flex>
    </Flex>
  );
};
