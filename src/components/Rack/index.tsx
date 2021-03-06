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
}

export const Rack = ({
  isOpen,
  onClose,
  cancela,
  fullOpen,
  fullClose,
}: RackProps) => {
  return (
    <>
      <EmptyCart isOpen={isOpen} onClose={onClose} />
      <FullCart isOpen={fullOpen} onClose={fullClose} cancela={cancela} />
      <Flex id="rack" w={["320px", "320px", "700px", "1300px"]} margin="auto">
        <ProductsList />
      </Flex>
    </>
  );
};
