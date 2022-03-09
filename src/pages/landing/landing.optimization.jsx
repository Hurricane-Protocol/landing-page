import { Box, Image } from "../../components/base";
import { Container, ContainerFluid } from "../../components/containers";
import { IconBtn } from "../../components/elements/button";
import { LaunchIcon, LeafIcon } from "../../components/elements/icons";

const Optimization = () => {
  return (
    <ContainerFluid display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Container flex={1} py={["40px", "80px", "120px"]} display={"flex"} alignItems={["center"]} gridGap={["16px", "20px", "30px"]}>
        <Box flex={["unset", "unset", 1]} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Image src={require("../../assets/image/landing/friendship.png")} width={["140px", "240px", "auto"]} />
        </Box>
        <Box flex={["unset", "unset", 1]} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gridGap={["16px", "30px", "40px"]}>
          <Box fontFamily={"artFont"} fontWeight={"900"} fontSize={["18px", "24px", "32px", "42px", "50px"]} color={"white"}>
            Yield Farming Optimization
          </Box>
          <Box maxWidth={"450px"} fontSize={["8px", "12px", "16px", "20px"]} lineHeight={"1.25em"} color={"white"}>
            Interest rates change with request, but for each day’s participation in the Hurricane service, you get new coins, as well as interest and other fees. Use yield optimizer on Terra Network and vaults with high security.
          </Box>
          <IconBtn dark icon={<LeafIcon />}>
            Open Vault
          </IconBtn>
        </Box>
      </Container>
    </ContainerFluid>
  );
};

export default Optimization;
