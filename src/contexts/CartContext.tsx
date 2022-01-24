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

interface Valor {
  prod: number;
}

interface CartContextData {
  sale: Sales[];
  venta: Ventas[];
  valor: Valor[];
  long: number;
  qty: number;
  SaleQty: () => void;
  SaleAdd: (id: number) => void;
  SaleDel: (id: number) => void;
  SaleCancel: () => void;
  SaleSum: number;
  multiplicacion: (x: number, y: number) => void;
  Aumenta: () => void;
  Disminuye: () => void;
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
  const [valor, setValor] = useState<Valor[]>([]);

  const SaleQty = () => {
    setLong(venta.length);
  };

  const SaleAdd = (id: number) => {
    const saleProduct = produtos.find((item) => item.id === id);
    if (saleProduct) {
      setSale([...sale, saleProduct]);
    }
  };

  useEffect(() => {
    setQty(qty);
  }, [qty]);

  const SaleDel = (id: number) => {
    setSale(sale.filter((item) => item.id !== id));
    SaleQty();
  };

  const SaleSum = sale.reduce((a, b) => a + b.price, 0);

  const SaleCancel = () => setSale([]);

  const multiplicacion = (x: number, y: number) => {
    return x * y;
    // setValor([...valor, { prod }]);
  };

  useEffect(() => {
    setLong(sale.length);
  }, [sale]);

  const Aumenta = () => {
    setQty(qty + 1);
  };

  const Disminuye = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  console.log(sale);
  console.log(long);
  console.log(qty);
  console.log(valor);

  return (
    <CartContext.Provider
      value={{
        sale,
        venta,
        long,
        valor,
        qty,
        SaleQty,
        SaleAdd,
        SaleDel,
        SaleCancel,
        SaleSum,
        multiplicacion,
        Aumenta,
        Disminuye,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
