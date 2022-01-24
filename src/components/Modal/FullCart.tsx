import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useCart } from "../../contexts/CartContext";
import { CartList } from "./CartList";

interface FullCartProps {
  isOpen: boolean;
  onClose: () => void;
  cancela: () => void;
  factor: number;
}
export const FullCart = ({
  isOpen,
  onClose,
  cancela,
  factor,
}: FullCartProps) => {
  const { SaleSum, qty } = useCart();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h="auto" w={["250px", "250px", "500px", "500px"]}>
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          h="50px"
          bg="main.primary"
          color="cinza.0"
          borderTopRadius="lg"
        >
          <Text>Carrinho de Compras</Text>
          <Text as="button" onClick={onClose} fontWeight="bold">
            X
          </Text>
        </ModalHeader>
        <ModalBody
          h="160px"
          w="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <CartList />
        </ModalBody>
        <ModalFooter
          h="150px"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <Flex
            w="100%"
            justifyContent="space-between"
            borderTop="3px solid"
            borderColor="cinza.100"
            paddingTop="16px"
            paddingBlock="16px"
          >
            <Text fontWeight="bold">Total</Text>
            <Text>R$ {SaleSum.toFixed(2)}</Text>
          </Flex>

          <Button
            onClick={cancela}
            w="100%"
            h="50px"
            bg="cinza.100"
            color="cinza.300"
          >
            Cancelar Venda
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
