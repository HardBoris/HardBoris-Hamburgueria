import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface ProductsProviderProps {
  children: ReactNode;
}

interface Products {
  id: string;
  name: string;
  category: string;
  price: number;
  img: string;
}
interface ProductContextData {
  produtos: Products[];
  getProdutos: () => void;
}

export const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData
);

const useProducts = () => useContext(ProductContext);

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [produtos, setProdutos] = useState<Products[]>([]);

  const getProdutos = () => {
    api.get("/products").then((response) => setProdutos(response.data));
  };

  useEffect(() => {
    getProdutos();
  }, []);

  console.log(produtos);

  return (
    <ProductContext.Provider value={{ produtos, getProdutos }}>
      {children}
    </ProductContext.Provider>
  );
};

export { useProducts, ProductsProvider };
