import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

interface EmptyCartProps {
  isOpen: boolean;
  onClose: () => void;
}
export const EmptyCart = ({ isOpen, onClose }: EmptyCartProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h="210px">
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
            Sua sacola está vazia
          </Text>
          <Text textAlign="center">Adicione itens</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
