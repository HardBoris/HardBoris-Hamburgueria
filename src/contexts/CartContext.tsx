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

interface Sales {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface Ventas {
  id: number;
  name: string;
  price: number;
  qty: number;
  img: string;
}

interface CartContextData {
  sale: Sales[];
  venta: Ventas[];
  long: number;
  qty: number;
  SaleQty: () => void;
  SaleAdd: (id: number) => void;
  SaleDel: (id: number) => void;
  SaleCancel: () => void;
  SaleSum: number;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }: CartProviderProps) => {
  const [sale, setSale] = useState<Sales[]>([]);
  const { produtos } = useProducts();
  const [long, setLong] = useState<number>(0);
  const [qty, setQty] = useState(1);
  const [venta, setVenta] = useState<Ventas[]>([]);

  const SaleQty = () => {
    setLong(venta.length);
  };

  const SaleAdd = (id: number) => {
    const saleProduct = produtos.find((item) => item.id === id);
    if (saleProduct) {
      setVenta([...venta, { ...saleProduct, qty }]);
    }

    SaleQty();
  };

  useEffect(() => {
    setQty(qty);
  }, [qty]);

  const SaleDel = (id: number) => {
    setVenta(venta.filter((item) => item.id !== id));
    SaleQty();
  };

  const SaleSum = venta.reduce((a, b) => a + b.price, 0);

  const SaleCancel = () => setVenta([]);

  const prueba = () => {};

  useEffect(() => {
    setLong(venta.length);
  }, [venta]);

  console.log(venta);
  console.log(long);
  console.log(qty);

  return (
    <CartContext.Provider
      value={{
        sale,
        venta,
        long,
        qty,
        SaleQty,
        SaleAdd,
        SaleDel,
        SaleCancel,
        SaleSum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
