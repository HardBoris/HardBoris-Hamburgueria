import { Flex, List, ListItem, Stack } from "@chakra-ui/react";
import { useProducts } from "../../contexts/ProductsContext";
import { Product } from "./Product";

export const ProductsList = () => {
  const { produtos } = useProducts();
  return (
    <Flex w={["320px", "320px", "660px", "1500px"]} margin="auto">
      <List>
        <Stack
          flexDirection="row"
          flexWrap="wrap"
          direction={["column", "row"]}
          justifyContent="space-evenly"
        >
          {produtos.map((item) => (
            <ListItem key={item.id}>
              <Product
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
