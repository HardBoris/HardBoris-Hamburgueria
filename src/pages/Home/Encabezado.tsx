import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Icones } from "../../components/Header/Icones";
import { Search } from "../../components/Header/Search";

interface EncabezadoProps {
  salir: () => void;
  ocultar: () => void;
  mostrar: () => void;
  abrir: () => void;
  oculto?: boolean;
}

export const Encabezado = ({
  salir,
  ocultar,
  mostrar,
  abrir,
  oculto,
}: EncabezadoProps) => {
  return (
    <Flex
      bg="cinza.0"
      h={["12vh", "12vh", "10vh", "8vh"]}
      w={["320px", "320px", "100%", "1300px"]}
      margin="auto"
    >
      <Flex
        paddingLeft={["10px", "10px", "20px", "20px"]}
        flexDirection="row"
        justifyContent="space-between"
        w="100%"
      >
        <Flex
          alignItems="center"
          display={[
            `${oculto ? "flex" : "none"}`,
            `${oculto ? "flex" : "none"}`,
            "flex",
            "flex",
          ]}
        >
          <Header />
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Flex
            h="12vh"
            justifyContent="center"
            alignItems="center"
            display={[
              `${oculto ? "none" : "flex"}`,
              `${oculto ? "none" : "flex"}`,
              "flex",
              "flex",
            ]}
          >
            <Search ocultar={ocultar} />
          </Flex>
          <Flex alignItems="center">
            <Icones
              salir={salir}
              mostrar={mostrar}
              abrir={abrir}
              oculto={oculto}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
