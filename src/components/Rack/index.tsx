import { Button, Flex } from "@chakra-ui/react";
import { useProducts } from "../../contexts/ProductsContext";
import { ProductsList } from "./ProductsList";

export const Rack = () => {
  const { getProdutos } = useProducts();
  const handleProduto = () => {
    return getProdutos();
  };
  return (
    <Flex w={["320px", "320px", "660px", "1300px"]} margin="auto">
      <ProductsList />
    </Flex>
  );
};
