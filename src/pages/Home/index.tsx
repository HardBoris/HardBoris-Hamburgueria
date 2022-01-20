import { Box, Flex } from "@chakra-ui/react";
// import { useHistory } from "react-router-dom";
import { Header } from "../../components/Header";
import { Icones } from "../../components/Header/Icones";
import { Search } from "../../components/Header/Search";

export const Home = () => {
  // const history = useHistory();
  return (
    <Flex bg="cinza.0">
      <Flex
        paddingLeft={["10px", "10px", "20px", "20px"]}
        flexDirection={["column", "column", "row", "row"]}
        justifyContent={["", "", "space-between", "space-between"]}
        w="100%"
      >
        <Flex w="100%" justifyContent="space-between">
          <Header />
          <Icones />
        </Flex>

        <Box display="none">
          <Search />
        </Box>
      </Flex>
    </Flex>
  );
};
