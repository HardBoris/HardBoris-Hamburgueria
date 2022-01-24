import { Flex, List, ListItem, Stack } from "@chakra-ui/react";
import { useProducts } from "../../contexts/ProductsContext";
import { Product } from "./Product";

export const ProductsList = () => {
  const { produtos } = useProducts();
  return (
    <Flex id="product-list">
      <List>
        <Flex
          w={["320px", "320px", "700px", "1300px"]}
          overflow={["scroll", "scroll", "scroll", "initial"]}
          margin="auto"
          flexWrap={["nowrap", "nowrap", "nowrap", "wrap"]}
          justifyContent={[
            "flex-start",
            "flex-start",
            "flex-start",
            "space-around",
          ]}
        >
          {produtos.map((item) => (
            <ListItem key={item.id} marginLeft="10px">
              <Product
                id={item.id}
                name={item.name}
                category={item.category}
                price={item.price}
                img={item.img}
              />
            </ListItem>
          ))}
        </Flex>
      </List>
    </Flex>
  );
};
