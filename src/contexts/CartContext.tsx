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
  category: string;
  price: number;
  qty: number;
  img: string;
}

interface CartContextData {
  sale: Sales[];
  venta: Ventas[];
  long: number;
  total: number;
  VentaLong: () => void;
  VentaSum: () => void;
  VentaAdd: (id: number, qty: number) => void;
  VentaDel: (id: number) => void;
  QtyAdd: (id: number) => void;
  QtyMinus: (id: number) => void;
  Cancelar: () => void;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }: CartProviderProps) => {
  const { produtos } = useProducts();
  const [sale, setSale] = useState<Sales[]>([]);
  const [venta, setVenta] = useState<Ventas[]>([]);
  const [long, setLong] = useState<number>(0);
  const [total, setTotal] = useState(0);

  const VentaLong = () => {
    setLong(venta.length);
  };

  const VentaAdd = (id: number, qty: number) => {
    const VentaItem = produtos.find((item) => item.id === id);
    if (VentaItem) {
      if (!sale.includes(VentaItem)) {
        setSale([...sale, VentaItem]);
        setVenta([...venta, { ...VentaItem, qty }]);
      }
    }
  };

  const QtyAdd = (id: number) => {
    const ventaProduct = venta.find((item) => item.id === id);
    if (ventaProduct) {
      ventaProduct.qty += 1;
    }
  };

  const QtyMinus = (id: number) => {
    const ventaProduct = venta.find((item) => item.id === id);
    if (ventaProduct) {
      ventaProduct.qty -= 1;
    }
  };

  const VentaDel = (id: number) => {
    setSale(sale.filter((item) => item.id !== id));
    setVenta(venta.filter((item) => item.id !== id));
  };

  const VentaSum = () =>
    setTotal(venta.reduce((a, b) => a + b.price * b.qty, 0));

  const Cancelar = () => {
    setSale([]);
    setVenta([]);
    setTotal(0);
  };

  useEffect(() => {
    VentaLong();
    VentaSum();
  });

  return (
    <CartContext.Provider
      value={{
        sale,
        venta,
        long,
        total,
        VentaLong,
        VentaAdd,
        VentaDel,
        VentaSum,
        QtyAdd,
        QtyMinus,
        Cancelar,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
