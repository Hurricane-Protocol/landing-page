import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { Box, Image } from "../../components/base";
import { Container, ContainerFluid } from "../../components/containers";
import { ThemeSet } from "../../providers";

const NftComming = () => {
  const { isDark } = useContext(ThemeSet);
  return (
    <ContainerFluid position={"relative"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <AniImage
        src={!isDark ? require("../../assets/image/landing/ring-light.png") : require("../../assets/image/landing/ring-dark.png")}
        position={"absolute"}
        top={"0px"}
        left={"0px"}
        //  width={["100%", "100%", "100%", "60%", "60%"]}
        height={"200%"}
        zIndex={-1}
      />
      <Container flex={1} pl={["0px", "0px", "250px"]} py={["50px", "120px", "180px"]} display={"flex"} justifyContent={"center"}>
        <Box flex={1} maxWidth={"900px"} px={["20px", "30px", "50px"]} py={"20px"} display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"flex-start"} gridGap={["16px", "30px", "40px"]} borderRadius={"40px"}>
          <Box fontFamily={"artFont"} fontWeight={"900"} fontSize={["18px", "24px", "30px", "40px", "50px"]} lineHeight={"1.25em"} color={"white"}>
            NFT Comming soon
          </Box>
          <Box fontSize={["8px", "12px", "16px", "20px"]} lineHeight={["2em", "2em", "1.5em"]} color={"white"}>
            Share your creative nfts with other users. become famouse creator or buyer on new hurricane enviroment. Discover, collect, and sell extraordinary NFTs. Create your collection Click My Collections and set up your collection.
          </Box>
        </Box>
      </Container>
    </ContainerFluid>
  );
};

const AniImage = styled(Image)`
  animation: ${keyframes`
      0% {
        transform: translate(-5%) translateY(-5%)
      }
      33% {
        transform: translate(0px) translateY(0px)
      }
      66% {
        transform: translate(-10%) translateY(-10%)
      }
      100% {
        transform: translate(-5%) translateY(-5%)
      }
    `} infinite linear 15s;
`;

export default NftComming;
