import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { Box, Image } from "../../components/base";
import { Container, ContainerFluid } from "../../components/containers";
import { IconBtn } from "../../components/elements/button";
import { LaunchIcon } from "../../components/elements/icons";
import { ThemeSet } from "../../providers";
const Banner: React.FC<{ [index: string]: any }> = ({ ...props }) => {
  const { isDark } = useContext(ThemeSet);
  return (
    <ContainerFluid position={"relative"} display={"flex"} flexDirection={"column"} alignItems={"center"} {...props}>
      <AniImage src={require(isDark ? "../../assets/image/landing/banner-dark.png" : "../../assets/image/landing/banner.png")} position={"absolute"} top={"0px"} right={"0px"} width={["100%", "auto"]} height={["auto", "200%"]} zIndex={-1} />
      <Container flex={1} pt={["180px", "220px", "260px", "300px"]} pb={["140px", "170px", "200px"]} display={"flex"}>
        <Box flex={1} display={"flex"} justifyContent={"center"} alignItems={["flex-start"]} flexDirection={"column"} gridGap={["16px", "20px", "25px", "30px"]}>
          <Box maxWidth={["100%", "100%", "50%"]} fontFamily={"artFont"} fontWeight={"900"} fontSize={["18px", "24px", "32px", "42px", "50px"]} lineHeight={"1.25em"} color={"white"}>
            Hurricane Protocol
          </Box>
          <Box maxWidth={["100%", "100%", "50%"]} fontSize={["8px", "12px", "16px", "20px"]} lineHeight={"1.5em"} color={"white"}>
            A fully decentralized protocol for private transactions on Terra network with the ability of Yield Farming and NFT trading in further future.
          </Box>
          <IconBtn dark icon={<LaunchIcon />}>
            Launch App
          </IconBtn>
        </Box>
      </Container>
    </ContainerFluid>
  );
};

const AniImage = styled(Image)`
  animation: ${keyframes`
      0% {
        transform: translate(5%) translateY(-5%)
      }
      33% {
        transform: translate(0px) translateY(0px)
      }
      66% {
        transform: translate(10%) translateY(-10%)
      }
      100% {
        transform: translate(5%) translateY(-5%)
      }
    `} infinite linear 15s;
`;

export default Banner;
