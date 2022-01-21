import { Flex, List, ListItem, Stack } from "@chakra-ui/react";
import { useProducts } from "../../contexts/ProductsContext";
import { Product } from "./Product";

export const ProductsList = () => {
  const { produtos } = useProducts();
  return (
    <Flex>
      <List>
        <Stack
          flexDirection="row"
          flexWrap="wrap"
          direction={["column", "row"]}
          justifyContent="space-evenly"
        >
          {produtos.map((item) => (
            <ListItem key={item.id} margin="0">
              <Product
                id={item.id}
                name={item.name}
                category={item.category}
                price={item.price}
                img={item.img}
              />
            </ListItem>
          ))}
        </Stack>
      </List>
    </Flex>
  );
};
