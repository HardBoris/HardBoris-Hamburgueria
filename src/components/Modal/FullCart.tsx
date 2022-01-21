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

interface FullCartProps {
  isOpen: boolean;
  onClose: () => void;
  cancela: () => void;
}
export const FullCart = ({ isOpen, onClose, cancela }: FullCartProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h="auto">
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
          <Text as="button" onClick={onClose}>
            X
          </Text>
        </ModalHeader>
        <ModalBody
          h="160px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text textAlign="center" fontWeight="bold">
            Seu carrinho está cheio
          </Text>
          <Text textAlign="center">pague a conta!</Text>
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
            paddingTop="10px"
          >
            <Text fontWeight="bold">Total</Text>
            <Text>Suma</Text>
          </Flex>

          <Button onClick={cancela} w="100%" h="50px">
            Cancelar Venda
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
