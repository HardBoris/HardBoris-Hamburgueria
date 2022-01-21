import { Flex } from "@chakra-ui/react";
import { useProducts } from "../../contexts/ProductsContext";
import { EmptyCart } from "../Modal/EmptyCart";
import { FullCart } from "../Modal/FullCart";
import { ProductsList } from "./ProductsList";

interface RackProps {
  isOpen: boolean;
  onClose: () => void;
  cancela: () => void;
  fullOpen: boolean;
  fullClose: () => void;
}

export const Rack = ({
  isOpen,
  onClose,
  cancela,
  fullOpen,
  fullClose,
}: RackProps) => {
  const { getProdutos } = useProducts();

  return (
    <>
      <EmptyCart isOpen={isOpen} onClose={onClose} />
      <FullCart isOpen={fullOpen} onClose={fullClose} cancela={cancela} />
      <Flex w={["320px", "320px", "660px", "1300px"]} margin="auto">
        <ProductsList inicio={() => getProdutos()} />
      </Flex>
    </>
  );
};
