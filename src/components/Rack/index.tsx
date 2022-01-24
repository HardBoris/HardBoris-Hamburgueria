import { Flex } from "@chakra-ui/react";
import { EmptyCart } from "../Modal/EmptyCart";
import { FullCart } from "../Modal/FullCart";
import { ProductsList } from "./ProductsList";

interface RackProps {
  isOpen: boolean;
  onClose: () => void;
  cancela: () => void;
  fullOpen: boolean;
  fullClose: () => void;
  factor: number;
}

export const Rack = ({
  isOpen,
  onClose,
  cancela,
  fullOpen,
  fullClose,
  factor,
}: RackProps) => {
  return (
    <>
      <EmptyCart isOpen={isOpen} onClose={onClose} />
      <FullCart
        isOpen={fullOpen}
        onClose={fullClose}
        cancela={cancela}
        factor={factor}
      />
      <Flex id="rack" w={["320px", "320px", "700px", "1300px"]} margin="auto">
        <ProductsList />
      </Flex>
    </>
  );
};
