import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FormularioProps {
  children: ReactNode;
  onSubmit: () => void;
}

export const Formulario = ({ children, ...rest }: FormularioProps) => (
  <Container w="300px" h="200px" as="form" {...rest}>
    {children}
  </Container>
);
