import React, { useContext } from "react";
import styled, { keyframes, useTheme } from "styled-components";
import * as Scroll from "react-scroll";
import { Container, ContainerFluid } from "../containers";
import { Box, Image, Link } from "../base";
import {} from "../elements/button";
import { ThemeSet } from "../../providers";
import { DiscordIcon, GithubIcon, TelegramIcon, TwitterIcon } from "../elements/icons";

const Footer = () => {
  const { isDark } = useContext(ThemeSet);
  const ScrollLink = Scroll.Link;
  return (
    <ContainerFluid py={17} display={"flex"} justifyContent={"center"}>
      <Container display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} color={"darkGray"} gridGap={[9, 10, 11, 12, 13]}>
        <Logo3D isDark={isDark} />
        <Box flex={1} width={"100%"} display={"flex"} flexDirection={["column", "column", "row"]} justifyContent={"space-between"} alignItems={"center"} gridGap={[5, 8, 11, 14]} flexWrap={"wrap"} fontSize={["12px", "14px", "16px"]} color={"#707070"}>
          <Box>@ 2022, All rights reserved by Hurricane Protocol</Box>
          <Box display={"flex"} gridGap={[5, 8, 11, 14]}>
            <Box
              fontSize={["16px", "20px", "24px"]}
              cursor={"pointer"}
              onClick={() => {
                window.open("https://discord.gg/A3GUD8wuv5", "_blank");
              }}
            >
              <DiscordIcon />
            </Box>
            <Box
              fontSize={["16px", "20px", "24px"]}
              cursor={"pointer"}
              onClick={() => {
                window.open("https://t.me/hurricane_protocol_official", "_blank");
              }}
            >
              <TelegramIcon />
            </Box>
            <Box
              fontSize={["16px", "20px", "24px"]}
              cursor={"pointer"}
              onClick={() => {
                window.open("https://github.com/Hurricane-Protocoal", "_blank");
              }}
            >
              <GithubIcon />
            </Box>
            <Box
              fontSize={["16px", "20px", "24px"]}
              cursor={"pointer"}
              onClick={() => {
                window.open("https://twitter.com/_HurricaneMoney", "_blank");
              }}
            >
              <TwitterIcon />
            </Box>
          </Box>
          {/* <ScrollLink to={"Banner"} spy={true} smooth={true} offset={0} duration={200} isDynamic={true}>
            <Box>Home</Box>
          </ScrollLink>
          <ScrollLink to={"About"} spy={true} smooth={true} offset={0} duration={200} isDynamic={true}>
            <Box>About</Box>
          </ScrollLink>
          <Box href={""} target={"blank"}>
            Whitepaper
          </Box>
          <ScrollLink to={"Tokenomic"} spy={true} smooth={true} offset={0} duration={200} isDynamic={true}>
            <Box>Tokenomics</Box>
          </ScrollLink>
          <ScrollLink to={"Watch"} spy={true} smooth={true} offset={0} duration={200} isDynamic={true}>
            <Box>NFTs</Box>
          </ScrollLink>
          <ScrollLink to={"Roadmap"} spy={true} smooth={true} offset={0} duration={200} isDynamic={true}>
            <Box>Roadmap</Box>
          </ScrollLink> */}
        </Box>
        {/* <Box bg={"white"} p={"12px 30px"} display={"flex"} gridGap={"20px"} borderRadius="100px">
          <Link lineHeight={"0px"}>
            <Image src={require("../../assets/icon/telegram.png")} />
          </Link>
          <Link href={""} lineHeight={"0px"}>
            <Image src={require("../../assets/icon/twitter.png")} />
          </Link>
          <Link lineHeight={"0px"}>
            <Image src={require("../../assets/icon/discord.png")} />
          </Link>
        </Box> */}
      </Container>
    </ContainerFluid>
  );
};

const Logo3D = ({ depth = 30, isDark }) => {
  return (
    <Logo3DCont depth={depth}>
      <Box width={["92px", "138px", "184px"]} height={["100px", "150px", "200px"]}>
        {Array(depth)
          .fill(0)
          .map((each, index) => {
            return <Logo3DLayers isDark={isDark} key={index} depth={depth} layer={index} />;
          })}
      </Box>
    </Logo3DCont>
  );
};

const Logo3DCont = styled(Box)`
  perspective: 1000px;
  & > div {
    position: relative;
    transform-style: preserve-3d;
    animation: ${keyframes`
        0% {
          transform: rotateY(0deg);
        }
        100% {
          transform: rotateY(360deg);
        }
      `} infinite linear 15s;
    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      content: "";
      background: radial-gradient(white, white, transparent);
      background: white;
      background-size: 100% 100%;
      width: ${(p) => p.depth / 2}px;
      height: 95%;
      transform: translate(-50%, -50%) rotateY(90deg);
      opacity: 0;
      animation: ${keyframes`
        23% {
          opacity: 0;
        }
        25% {
          opacity: 1;
          left: 100%;
        }
        27% {
          opacity: 0;
        }
        73% {
          opacity: 0;
        }
        75% {
          opacity: 1;
          left: 0%;
        }
        77% {
          opacity: 0;
        }
      `} infinite linear 15s;
    }
    &:before {
      position: absolute;
      top: 100%;
      left: 50%;
      width: 100px;
      height: 100px;
      border: 50px dashed #fff;
      border-radius: 100%;
      animation: ${keyframes`
      0% {
        transform: translate(-50%, -50%) rotateX(90deg) rotateZ(0deg) translateZ(-3px) rotateZ(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotateX(90deg) rotateZ(0deg) translateZ(-3px) rotateZ(360deg);
      }
      `} infinite linear 15s;
    }
  }
`;
const Logo3DLayers = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${require("../../assets/logo/logo.svg").default});
  background-size: 100% 100%;
  filter: brightness(80%) ${(p) => (p.isDark ? "drop-shadow(0px 0px 1px black)" : "drop-shadow(0px 0px 1px #0000)")};
  &:first-child,
  &:last-child {
    filter: none;
  }
  transform-style: preserve-3d;
  transform: translateZ(${(p) => (p.layer - 1 - p.depth / 2) / 2}px);
`;

export default Footer;
