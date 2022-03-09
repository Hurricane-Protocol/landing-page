import React, { useState } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import { default as MainHeader } from "./main.header";
import { default as MainFooter } from "./main.footer";
import { default as MainSideBar } from "./main.sidebar";
import { default as SectionHeader } from "./section.header";
import { Container, ContainerFluid } from "../containers";

export const MainLayout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <MainHeader showSideBar={showSideBar} setShowSideBar={setShowSideBar}></MainHeader>
      {/* <MainSideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar}></MainSideBar> */}
      {children}
      <MainFooter></MainFooter>
    </>
  );
};
export const SectionLayout = ({ title, subTitle, children, ...props }) => {
  return (
    <AnimationContainer>
      <ContainerFluid pt={[13, 16, 18]} display={"flex"} justifyContent={"center"} {...props}>
        <Container display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <SectionHeader title={title ? title : undefined} subTitle={subTitle ? subTitle : undefined} />
          {children}
        </Container>
      </ContainerFluid>
    </AnimationContainer>
  );
};

const AnimationContainer = styled(ScrollAnimation).attrs({
  animateIn: "fadeIn",
})`
  transition: 1s;
  transform: scale(0.8);
  &.fadeIn {
    transform: scale(1);
  }
`;
