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
  x: number;
}

interface CartContextData {
  sale: Sales[];
  venta: Ventas[];
  valor: Valor[];
  long: number;
  SaleQty: () => void;
  SaleAdd: (id: number) => void;
  SaleDel: (id: number) => void;
  SaleCancel: () => void;
  SaleSum: number;
  VentaSum: number;
  VentaAdd: (id: number, qty: number) => void;
  VentaDel: (id: number) => void;
  VentaCancel: () => void;
  ValorAdd: (x: number) => void;
  ValorCancel: () => void;
  ValorDel: () => void;
  ValorSum: number;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }: CartProviderProps) => {
  const [sale, setSale] = useState<Sales[]>([]);
  const { produtos } = useProducts();
  const [long, setLong] = useState<number>(0);
  // const [qty, setQty] = useState(1);
  const [venta, setVenta] = useState<Ventas[]>([]);
  const [valor, setValor] = useState<Valor[]>([]);

  const SaleQty = () => {
    setLong(sale.length);
  };

  const SaleAdd = (id: number) => {
    const saleProduct = produtos.find((item) => item.id === id);
    if (saleProduct) {
      setSale([...sale, saleProduct]);
    }
  };

  const VentaAdd = (id: number, qty: number) => {
    const ventaProduct = produtos.find((item) => item.id === id);
    if (ventaProduct) {
      setVenta([...venta, { ...ventaProduct, qty }]);
    }
  };

  const ValorAdd = (x: number) => {
    setValor([...valor, { x }]);
  };

  // useEffect(() => {
  //   setQty(qty);
  // }, [qty]);

  const SaleDel = (id: number) => {
    setSale(sale.filter((item) => item.id !== id));
    SaleQty();
  };

  const VentaDel = (id: number) => {
    setVenta(venta.filter((item) => item.id !== id));
    SaleQty();
  };

  const ValorDel = () => {
    setValor(valor.splice(valor.length));
  };

  const SaleSum = sale.reduce((a, b) => a + b.price, 0);

  const VentaSum = venta.reduce((a, b) => a + b.price, 0);
  const ValorSum = valor.reduce((a, b) => a + b.x, 0);

  const SaleCancel = () => setSale([]);
  const VentaCancel = () => setVenta([]);
  const ValorCancel = () => setValor([]);

  useEffect(() => {
    setLong(sale.length);
  }, [sale]);

  console.log(sale);
  console.log(long);
  console.log(valor);
  console.log(venta);

  return (
    <CartContext.Provider
      value={{
        sale,
        venta,
        long,
        valor,
        SaleQty,
        SaleAdd,
        SaleDel,
        SaleCancel,
        SaleSum,
        VentaAdd,
        VentaDel,
        VentaCancel,
        VentaSum,
        ValorAdd,
        ValorCancel,
        ValorDel,
        ValorSum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
