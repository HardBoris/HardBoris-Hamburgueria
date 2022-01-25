import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { Rack } from "../../components/Rack";
import { useAuth } from "../../contexts/UserContext";
import { useCart } from "../../contexts/CartContext";
import { Encabezado } from "./Encabezado";

export const Home = () => {
  const { signOut } = useAuth();
  const { long, SaleCancel, VentaCancel, ValorCancel } = useCart();
  const [oculto, setOculto] = useState(true);
  const Ocultar = () => {
    setOculto(true);
  };

  const Mostrar = () => {
    setOculto(false);
  };

  const {
    isOpen: isEmptyCartOpen,
    onOpen: onEmptyCartOpen,
    onClose: onEmptyCartClose,
  } = useDisclosure();

  const {
    isOpen: isFullCartOpen,
    onOpen: onFullCartOpen,
    onClose: onFullCartClose,
  } = useDisclosure();

  const Abrir = () => {
    if (long === 0) {
      onEmptyCartOpen();
    }
    if (long > 0) {
      onFullCartOpen();
    }
  };

  const handleSale = () => {
    SaleCancel();
    VentaCancel();
    ValorCancel();
    onFullCartClose();
    onEmptyCartOpen();
  };

  return (
    <>
      <Encabezado
        salir={() => signOut()}
        ocultar={() => Ocultar()}
        mostrar={() => Mostrar()}
        abrir={Abrir}
        oculto={oculto}
      />
      <Rack
        isOpen={isEmptyCartOpen}
        onClose={onEmptyCartClose}
        fullClose={onFullCartClose}
        fullOpen={isFullCartOpen}
        cancela={() => handleSale()}
      />
    </>
  );
};
