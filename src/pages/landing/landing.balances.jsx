import { Box, Image } from "../../components/base";
import { Container, ContainerFluid } from "../../components/containers";
import { IconBtn } from "../../components/elements/button";
import { LaunchIcon } from "../../components/elements/icons";

const Balances = () => {
  return (
    <ContainerFluid display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Container flex={1} py={"120px"} display={"flex"} flexDirection={["column", "column", "row"]} justifyContent={"space-around"} alignItems={["center", "center", "flex-start"]} gridGap={"20px"}>
        <Box width={"100%"} maxWidth={["80%", "80%", "250px"]} p={"20px"} borderWidth={"1px"} borderStyle={"solid"} borderColor={"cyan"} borderRadius={"16px"} display={"flex"} alignItems={"flex-start"} flexDirection={"column"} gridGap={"12px"}>
          <Box ml={"auto"}>
            <Box bg={"cyan"} width={"24px"} height={"30px"} />
          </Box>
          <Box fontSize={"24px"} lineHeight={"40px"} color={"cyan"}>
            2,509,986
          </Box>
          <Box color={"white"} fontSize={"13px"} lineHeight={"1.25em"}>
            Total ETH deposited
          </Box>
        </Box>
        <Box width={"100%"} maxWidth={["80%", "80%", "250px"]} p={"20px"} borderWidth={"1px"} borderStyle={"solid"} borderColor={"cyan"} borderRadius={"16px"} display={"flex"} alignItems={"flex-start"} flexDirection={"column"} gridGap={"12px"}>
          <Box ml={"auto"}>
            <Box bg={"cyan"} width={"24px"} height={"30px"} />
          </Box>
          <Box fontSize={"24px"} lineHeight={"40px"} color={"cyan"}>
            2,509,986
          </Box>
          <Box color={"white"} fontSize={"13px"} lineHeight={"1.25em"}>
            Unique users
          </Box>
        </Box>
        <Box width={"100%"} maxWidth={["80%", "80%", "250px"]} p={"20px"} borderWidth={"1px"} borderStyle={"solid"} borderColor={"cyan"} borderRadius={"16px"} display={"flex"} alignItems={"flex-start"} flexDirection={"column"} gridGap={"12px"}>
          <Box ml={"auto"}>
            <Box bg={"cyan"} width={"24px"} height={"30px"} />
          </Box>
          <Box fontSize={"24px"} lineHeight={"40px"} color={"cyan"}>
            2,509,986
          </Box>
          <Box color={"white"} fontSize={"13px"} lineHeight={"1.25em"}>
            Total deposits
          </Box>
        </Box>
      </Container>
    </ContainerFluid>
  );
};

export default Balances;
