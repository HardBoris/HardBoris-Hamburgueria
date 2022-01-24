import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";

interface CartProductProps {
  id: number;
  name: string;
  price: number;
  qty: number;
  img: string;
}

export const CartProduct = ({
  id,
  name,
  price,
  qty,
  img,
}: CartProductProps) => {
  const { SaleDel } = useCart();
  const [productQty, setProductQty] = useState(1);

  const Aumenta = () => {
    setProductQty(productQty + 1);
  };

  const Disminuye = () => {
    if (productQty > 1) {
      setProductQty(productQty - 1);
    }
  };

  return (
    <Flex w="100%" h="80px" alignItems="center" marginTop="20px" qty={qty}>
      <Flex h="80px" w="80px" justifyContent="center" bg="cinza.0">
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
            onClick={() => Disminuye()}
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
            {productQty}
          </Text>
          <Text
            as="button"
            h="30px"
            w="30px"
            fontWeight="bold"
            color="main.secondary"
            textAlign="center"
            bg="cinza.0"
            onClick={() => Aumenta()}
          >
            +
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
