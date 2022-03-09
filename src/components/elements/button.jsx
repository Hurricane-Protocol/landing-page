import styled from "styled-components";
import { Box, Link } from "../base";

export const IconBtn = ({ dark, icon, px = ["5px", "12px", "16px"], py = ["5px", "12px", "16px"], children, ...props }) => {
  return (
    <IconBtnBase bg={dark ? "black" : "white"} px={px} py={py} borderRadius={["100px", "10px", "16px"]} dark={dark} color={dark ? "white" : "black"} display={"flex"} alignItems={"center"} cursor={"pointer"} {...props}>
      <Box bg={"#54B7FF"} p={["5px", "8px", "10px"]} borderRadius={["100px", "10px", "12px"]} color={"white"} display={"flex"}>
        {icon}
      </Box>
      <Box px={["8px", "12px", "16px"]} fontFamily={"artFont"} fontSize={["10px", "12px"]} fontWeight={"bold"} whiteSpace={"nowrap"}>
        {children}
      </Box>
    </IconBtnBase>
  );
};

const IconBtnBase = styled(Box).attrs({})`
  & > div:first-child > * {
    transition: 500ms;
  }
  &:hover > div:first-child > * {
    filter: drop-shadow(0px 0px 1px #3970c7);
    color: white;
    transform: scale(3) rotate(360deg);
    /* transition-timing-function: cubic-bezier(0.25, -1, 0.75, 2); */
  }
`;
export const NavBtn = styled(Box).attrs({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  color: "white",
})``;
