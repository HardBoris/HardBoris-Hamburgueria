import { Box, Container, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FormularioProps {
  children: ReactNode;
  onSubmit: () => void;
}

export const Formulario = ({ children, ...rest }: FormularioProps) => (
  <Flex
    as="form"
    w={["300px", "300px", "500px", "500px"]}
    border="2px solid"
    borderColor="cinza.0"
    borderRadius="md"
    padding="10px"
    boxSize="max-content"
    flexDirection="column"
    margin="auto"
    {...rest}
  >
    {children}
  </Flex>
);
