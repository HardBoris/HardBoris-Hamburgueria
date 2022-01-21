import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { Header } from "../../components/Header";
import { Icones } from "../../components/Header/Icones";
import { Search } from "../../components/Header/Search";
import { Rack } from "../../components/Rack";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { Encabezado } from "./Encabezado";

export const Home = () => {
  const { signOut } = useAuth();
  const { qty, SaleCancel } = useCart();
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
    if (qty === 0) {
      onEmptyCartOpen();
    }
    if (qty > 0) {
      onFullCartOpen();
    }
  };

  const handleSale = () => {
    SaleCancel();
    onFullCartClose();
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
