import { Button, Flex } from "@chakra-ui/react";
import { useProducts } from "../../contexts/ProductsContext";
import { ProductsList } from "./ProductsList";

export const Rack = () => {
  const { getProdutos } = useProducts();
  const handleProduto = () => {
    return getProdutos();
  };
  return (
    <Flex>
      <ProductsList />
    </Flex>
  );
};
