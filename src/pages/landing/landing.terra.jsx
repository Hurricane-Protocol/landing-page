import { useContext } from "react";
import { Box, Image } from "../../components/base";
import { Container, ContainerFluid } from "../../components/containers";
import { IconBtn } from "../../components/elements/button";
import { LeafIcon } from "../../components/elements/icons";
import { ThemeSet } from "../../providers";

const Terra = () => {
  const { isDark } = useContext(ThemeSet);
  return (
    <ContainerFluid display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Container flex={1} py={["50px", "80px", "100px"]} display={"flex"} flexDirection={["column-reverse", "column-reverse", "row"]} alignItems={["center"]} gridGap={"30px"}>
        <Box flex={1} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gridGap={["30px", "30px", "40px"]} textAlign={"center"}>
          <Box flex={1} display={"flex"} justifyContent={"center"}>
            <Image width={["200px", "250px", "300px"]} src={!isDark ? require("../../assets/image/landing/terra-light.png") : require("../../assets/image/landing/terra-dark.png")} />
          </Box>
          <Box fontFamily={"artFont"} fontWeight={"900"} fontSize={["18px", "24px", "32px", "42px", "50px"]} lineHeight={"1em"} color={"white"}>
            Terra & Near Ecosystem
            {/* Supported Chain */}
          </Box>
          <Box maxWidth={"80%"} fontSize={["8px", "12px", "16px", "20px"]} lineHeight={"1.25em"} color={"white"}>
            {/* The main motivation behind the strategy is most max security can give the Terra & Near Ecosystem, which is the foremost progressed in transfers through users. This gives get to control over the operation of processes and clear receipt and expedite payment activity in a brief time. */}
            We chose Terra & NEAR due to the Ecosystems’ high transfer volume and user retention. This increases anonymity and increases the amount of fees for LPs while maintaining high throughput.
          </Box>
          {/* <IconBtn icon={<LeafIcon />}>open vault</IconBtn> */}
        </Box>
      </Container>
    </ContainerFluid>
  );
};

export default Terra;
