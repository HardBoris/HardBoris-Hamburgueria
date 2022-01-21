import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useProducts } from "./ProductsContext";

interface CartProviderProps {
  children: ReactNode;
}

interface Products {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
interface CartContextData {
  sale: Products[];
  qty: number;
  SaleQty: () => void;
  SaleAdd: (id: number) => void;
  SaleDel: (id: number) => void;
  SaleCancel: () => void;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }: CartProviderProps) => {
  const [sale, setSale] = useState<any[]>([]);
  const { produtos } = useProducts();
  const [qty, setQty] = useState<number>(0);

  const SaleQty = () => {
    setQty(sale.length);
  };

  const SaleAdd = (id: number) => {
    const novoProduto = produtos.find((item) => item.id === id);
    setSale([...sale, novoProduto]);
    SaleQty();
  };
  const SaleDel = (id: number) => {
    setSale(produtos.filter((item) => item.id !== id));
    SaleQty();
  };

  const SaleCancel = () => setSale([]);

  useEffect(() => {
    setQty(sale.length);
  }, [sale]);

  console.log(sale);
  console.log(qty);

  return (
    <CartContext.Provider
      value={{ sale, qty, SaleQty, SaleAdd, SaleDel, SaleCancel }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
