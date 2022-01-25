import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";

interface CartProductProps {
  id: number;
  name: string;
  price: number;
  img: string;
}

export const CartProduct = ({ id, name, price, img }: CartProductProps) => {
  const { VentaDel, SaleDel, ValorAdd, ValorDel } = useCart();
  const [qty, setQty] = useState(0);

  const Aumenta = () => {
    setQty(qty + 1);
    ValorAdd(price);
  };

  const Disminuye = () => {
    if (qty > 1) {
      setQty(qty - 1);
      ValorDel();
    }
  };

  return (
    <Flex w="100%" h="80px" alignItems="center" marginTop="20px">
      <Flex
        h="80px"
        w="80px"
        justifyContent="center"
        bg="cinza.100"
        borderRadius="md"
      >
        <Image src={img} objectFit="contain" />
      </Flex>
      <Flex
        h="80px"
        w="80%"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-start"
        paddingLeft="20px"
      >
        <Flex w="100%" justifyContent="space-between">
          <Text fontWeight="bold">{name}</Text>
          <Box as="button" onClick={() => SaleDel(id)}>
            <FaTrash />
          </Box>
        </Flex>

        <Flex>
          <Text
            as="button"
            h="30px"
            w="30px"
            fontWeight="bold"
            color="main.secondary"
            textAlign="center"
            bg="cinza.0"
            onClick={() => {
              Disminuye();
            }}
          >
            -
          </Text>
          <Text
            h="30px"
            w="50px"
            textAlign="center"
            border="2px solid"
            borderColor="cinza.0"
          >
            {qty}
          </Text>
          <Text
            as="button"
            h="30px"
            w="30px"
            fontWeight="bold"
            color="main.secondary"
            textAlign="center"
            bg="cinza.0"
            onClick={() => {
              Aumenta();
            }}
          >
            +
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
