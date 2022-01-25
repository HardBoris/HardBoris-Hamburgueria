import { Flex, List, ListItem, Stack } from "@chakra-ui/react";
import { useCart } from "../../contexts/CartContext";
import { CartProduct } from "./CartProduct";

interface CartListProps {
  confirma: () => void;
}

export const CartList = ({ confirma }: CartListProps) => {
  const { venta } = useCart();

  return (
    <Flex w="100%">
      <List w="100%">
        <Stack
          flexDirection="row"
          flexWrap="wrap"
          direction={["column", "row"]}
          justifyContent="space-evenly"
          w="100%"
        >
          {venta.map((item) => (
            <ListItem key={item.id} w="100%">
              <CartProduct
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                qty={item.qty}
              />
            </ListItem>
          ))}
        </Stack>
      </List>
    </Flex>
  );
};
