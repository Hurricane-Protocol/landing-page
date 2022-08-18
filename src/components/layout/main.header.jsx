import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Container, ContainerFluid } from "../containers";
import { ArtBtn, DrdnBtn, IconBtn, NavBtn } from "../elements/button";
import { Box, Image, Link } from "../base";
import { DiscordIcon, GithubIcon, LaunchIcon, LDIcon, NoteIcon, TelegramIcon, TwitterIcon } from "../elements/icons";
import { ThemeSet } from "../../providers/index";

const Header = ({ showSideBar, setShowSideBar }) => {
  const menuData = [
    {
      name: "qwerqwer",
      action: "#",
    },
    {
      name: "qwerqwer",
      action: "#",
    },
    {
      name: "qwerqwer",
      action: "#",
    },
  ];
  const [currentSection, setCurrentSection] = useState("");
  const { isDark, setDark } = useContext(ThemeSet);
  return (
    <Box width={"100%"} maxWidth={"100vw"} backdropFilter={"blur(10px)"} position={"fixed"} display={"flex"} justifyContent={"center"} zIndex={10}>
      <Container px={[3]} py={[3, 4, 5, 6]} display={"flex"} alignItems={"center"}>
        <Box width={"100%"} display={"flex"} justifyContent={"space-around"} alignItems={"center"} flexWrap={"wrap"} gridGap={["16px", "20px", "26px", "32px", "40px"]}>
          <Box order={[1, 1, 1]} mr="auto">
            <ScrollLink to={"Banner"} spy={true} smooth={true} offset={0} duration={200}>
              <Box display={"flex"} alignItems={"center"} gridGap={"12px"} cursor={"pointer"}>
                <Image src={require("../../assets/logo/logo.svg").default} height={"40px"} />
                <Box background={"linear-gradient(90deg, #3a6397, #53c0df)"} backClip={"text"} fontFamily={"artFont"} fontWeight={"900"} fontSize={["18px", "24px", "32px"]} lineHeight={"1em"} color={"transparent"}>
                  Hurricane
                </Box>
              </Box>
            </ScrollLink>
          </Box>
          <Box order={[3, 3, 2]} display={"flex"} gridGap={["16px", "20px", "26px", "32px", "40px"]}>
            <NavBtn
              fontSize={["16px", "20px", "24px"]}
              onClick={() => {
                window.open("https://discord.gg/A3GUD8wuv5", "_blank");
              }}
            >
              <DiscordIcon />
            </NavBtn>
            <NavBtn
              fontSize={["16px", "20px", "24px"]}
              onClick={() => {
                window.open("https://t.me/hurricane_protocol_official", "_blank");
              }}
            >
              <TelegramIcon />
            </NavBtn>
            <NavBtn
              fontSize={["16px", "20px", "24px"]}
              onClick={() => {
                window.open("https://github.com/Hurricane-Protocol", "_blank");
              }}
            >
              <GithubIcon />
            </NavBtn>
            <NavBtn
              fontSize={["16px", "20px", "24px"]}
              onClick={() => {
                window.open("https://twitter.com/_HurricaneMoney", "_blank");
              }}
            >
              <TwitterIcon />
            </NavBtn>
            <NavBtn
              gridGap={"10px"}
              onClick={() => {
                window.open("https://docs.hurricane.money", "_blank");
              }}
            >
              <NoteIcon size={"15px"} color={"#54B7FF"} />
              Docs
            </NavBtn>
            <NavBtn
              onClick={() => {
                setDark(!isDark);
              }}
              fontSize={["22px", "28px", "34px"]}
            >
              <LDIcon />
            </NavBtn>
          </Box>
          <IconBtn
            order={[2, 2, 3]}
            py={["5px", "9px", "12px"]}
            icon={<LaunchIcon />}
            onClick={() => {
              window.open("https://terra.hurricane.money/", "blank");
            }}
          >
            Launch App
          </IconBtn>
          {/* <Link
            order={[2, 3]}
            ml={["auto", 8]}
            display={["block", "block", "block", "none"]}
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          >
            <ListIcon />
          </Link> */}
        </Box>
      </Container>
    </Box>
  );
};

const ListIcon = styled.div`
  position: relative;
  &,
  &::before,
  &::after {
    background: white;
    display: inline-block;
    width: 35px;
    height: 5px;
    border-radius: 100px;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
  }
  &::before {
    margin-top: 10px;
  }
  &::after {
    margin-top: -10px;
  }
`;

export default Header;
