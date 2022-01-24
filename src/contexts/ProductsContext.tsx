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
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
interface ProductContextData {
  produtos: Products[];
  filteredProducts: Products[];
  getProdutos: () => void;
  Filtrados: (opcion: string) => void;
}

export const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData
);

const useProducts = () => useContext(ProductContext);

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [produtos, setProdutos] = useState<Products[]>([]);

  const getProdutos = async () => {
    await api
      .get("/products")
      .then((response) => setProdutos([...response.data]));
  };

  useEffect(() => {
    getProdutos();
  }, []);

  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);

  const Filtrados = (opcion: string) => {
    const Filtro = produtos.filter(
      (item) =>
        item.category.toLowerCase() === opcion.toLowerCase() ||
        item.name.toLowerCase() === opcion.toLowerCase()
    );
    setFilteredProducts(Filtro);
  };

  return (
    <ProductContext.Provider
      value={{ produtos, getProdutos, Filtrados, filteredProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { useProducts, ProductsProvider };
