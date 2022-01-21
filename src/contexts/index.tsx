import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./CartContext";
import { ProductsProvider } from "./ProductsContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <ProductsProvider>
      <CartProvider>
        <ChakraProvider resetCSS theme={theme}>
          {children}
        </ChakraProvider>
      </CartProvider>
    </ProductsProvider>
  </AuthProvider>
);
