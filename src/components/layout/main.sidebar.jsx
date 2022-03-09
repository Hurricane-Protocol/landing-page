import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Box, Link } from "../base";
import { IconBtn, NavBtn } from "../elements/button";
import { DiscordIcon, GithubIcon, LaunchIcon, NoteIcon, TelegramIcon, TwitterIcon } from "../elements/icons";
import { ThemeSet } from "../../providers";

const SideBar = ({ showSideBar, setShowSideBar }) => {
  const [curVisibleList, setCurVisableList] = useState(1);
  const [currentSection, setCurrentSection] = useState("");
  const { isDark, setDark } = useContext(ThemeSet);
  return (
    <Box p={8} position={"fixed"} top={0} left={0} bg={"#0e454daa"} backdropFilter={"blur(10px)"} width={"100%"} height={"100%"} zIndex={11} ml={showSideBar ? [0, 0, 0, "-100%"] : "-100%"} transition={"var(--transition)"} display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} justifyContent={"flex-end"}>
        <Link
          color={"white"}
          hoverColor={"#44c098"}
          fontSize={12}
          onClick={() => {
            setShowSideBar(false);
          }}
        >
          &times;
        </Link>
      </Box>
      <Box mt={"100px"} display={"flex"} flexDirection={"column"} gridGap={"30px"}>
        <NavBtn>
          <DiscordIcon size={"24px"} />
        </NavBtn>
        <NavBtn>
          <TelegramIcon size={"24px"} />
        </NavBtn>
        <NavBtn>
          <GithubIcon size={"24px"} />
        </NavBtn>
        <NavBtn>
          <TwitterIcon size={"24px"} />
        </NavBtn>
        <NavBtn>Roadmap</NavBtn>
        <NavBtn gridGap={"10px"}>
          <NoteIcon size={"15px"} color={"#54B7FF"} />
          Docs
        </NavBtn>
        <NavBtn
          onClick={() => {
            setDark(!isDark);
          }}
        >
          L/D
        </NavBtn>
        <IconBtn py={"12px"} icon={<LaunchIcon />}>
          Launch App
        </IconBtn>
      </Box>
    </Box>
  );
};

const ListBox = styled(Box).attrs({})`
  > a {
    &::after {
      content: "";
      width: 6px;
      height: 6px;
      border-top: 1px solid #0008;
      border-left: 1px solid #0008;
      visibility: ${(p) => (p.haveSubMenu ? "visible" : "hidden")};
      transform: ${(p) => (p.isExpanded ? "rotate(45deg)" : "rotate(225deg)")};
      transition: var(--transition);
    }
  }
  > div {
    max-height: ${(p) => (p.isExpanded ? "500px" : 0)};
  }
`;

const SubList = styled(Box).attrs({
  ml: 5,  
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  transition: "2000ms",
})``;

const ListLink = styled(Link).attrs({
  mb: 3,
  pb: 3,
  width: "100%",
  fontWeight: 1,
  color: "black",
  hoverColor: "purple",
  borderBottom: "1px solid rgb(237, 237, 237)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})``;

export default SideBar;
