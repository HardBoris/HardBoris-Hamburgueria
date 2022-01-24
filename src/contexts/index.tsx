import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";
import { UserProvider } from "./UserContext";
import { CartProvider } from "./CartContext";
import { ProductsProvider } from "./ProductsContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <UserProvider>
    <ProductsProvider>
      <CartProvider>
        <ChakraProvider resetCSS theme={theme}>
          {children}
        </ChakraProvider>
      </CartProvider>
    </ProductsProvider>
  </UserProvider>
);
