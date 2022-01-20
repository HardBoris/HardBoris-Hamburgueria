import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
// import { useHistory } from "react-router-dom";
import { Header } from "../../components/Header";
import { Icones } from "../../components/Header/Icones";
import { Search } from "../../components/Header/Search";
import { useAuth } from "../../contexts/AuthContext";

export const Home = () => {
  // const history = useHistory();
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
    <Flex id="home" bg="cinza.0" h={["12vh", "12vh", "10vh", "8vh"]}>
      <Flex
        paddingLeft={["10px", "10px", "20px", "20px"]}
        flexDirection={["row", "row", "row", "row"]}
        justifyContent={[
          "space-between",
          "space-between",
          "space-between",
          "space-between",
        ]}
        w={["100%", "100%", "100%", "100%"]}
      >
        <Flex
          // justifyContent="space-between"
          alignItems="center"
          // display={oculto ? "flex" : "none"}
        >
          <Header oculto={oculto} />
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
            <Search ocultar={() => Ocultar()} />
          </Flex>
          <Flex
            // justifyContent="space-between"
            alignItems="center"
            // display={oculto ? "flex" : "none"}
          >
            <Icones
              salir={() => signOut()}
              mostrar={() => Mostrar()}
              adicionar={() => {}}
              oculto={oculto}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
