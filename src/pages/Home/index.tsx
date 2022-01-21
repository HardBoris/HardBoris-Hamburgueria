import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Header } from "../../components/Header";
import { Icones } from "../../components/Header/Icones";
import { Search } from "../../components/Header/Search";
import { Rack } from "../../components/Rack";
import { useAuth } from "../../contexts/AuthContext";
import { Encabezado } from "./Encabezado";

export const Home = () => {
  const { signOut } = useAuth();
  const [oculto, setOculto] = useState(true);
  const Ocultar = () => {
    setOculto(true);
  };

  const Mostrar = () => {
    setOculto(false);
  };

  console.log(oculto);

  return (
    <>
      <Encabezado
        salir={() => signOut()}
        ocultar={() => Ocultar()}
        mostrar={() => Mostrar()}
        incognita={() => {}}
        oculto={oculto}
      />
      <Rack />
    </>
  );
};
