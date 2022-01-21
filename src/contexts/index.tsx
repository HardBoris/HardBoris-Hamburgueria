import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthContext";
import { ProductsProvider } from "./ProductsContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <ProductsProvider>
      <ChakraProvider resetCSS theme={theme}>
        {children}
      </ChakraProvider>
    </ProductsProvider>
  </AuthProvider>
);
