import styled, { keyframes } from "styled-components";
import { Box, Image } from "../../components/base";
import { Container, ContainerFluid } from "../../components/containers";
import { IconBtn } from "../../components/elements/button";
import { PlayIcon } from "../../components/elements/icons";

const About = () => {
  return (
    <ContainerFluid display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Container flex={1} py={["50px", "90px", "120px"]} display={"flex"} justifyContent={"space-around"} alignItems={"center"} gridGap={["16px", "24px", "32px", "40px"]}>
        <Box flex={["unset", "unset", 2]} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <RotateBox flex={1} zIndex={-1} />
        </Box>
        <Box flex={["unset", "unset", 3]} display={"flex"} justifyContent={"center"} alignItems={"flex-start"} flexDirection={"column"} gridGap={["16px", "24px", "32px", "40px"]}>
          <Box fontFamily={"artFont"} fontWeight={"900"} fontSize={["18px", "24px", "32px", "42px", "50px"]} color={"white"}>
            What is Hurricane?
          </Box>
          <Box maxWidth={"450px"} fontSize={["8px", "12px", "16px", "20px"]} lineHeight={"1.25em"} color={"white"}>
            {/* It’s a powerful vision of future transactions for users in Terra & Near Ecosystem to combine the most needed features in one. */}
            A powerful platform to empower a powerful vision for future transactions: privacy for every user. 
          </Box>
          <IconBtn dark icon={<PlayIcon />}>
            Discover
          </IconBtn>
        </Box>
      </Container>
    </ContainerFluid>
  );
};

const RotateBox = ({ ...props }) => {
  return (
    <>
      <RotateBoxCont position={"relative"} {...props}>
        <RotateBoxBase position={"relative"} top={"50%"} left={"50%"}>
          {Array(6)
            .fill(0)
            .map((each, index) => {
              return <RotateBoxFace key={index} />;
            })}
        </RotateBoxBase>
      </RotateBoxCont>
      <Image width={["70px", "150px", "220px"]} src={require("../../assets/image/landing/about1.png")} />
      {/* <Image src={require("../../assets/image/landing/about.png")} /> */}
    </>
  );
};

const RotateBoxBase = styled(Box).attrs({
  height: ["50px", "100px", "150px"],
})`
  transform-style: preserve-3d;
  animation: ${keyframes`
      from {
        transform: rotate(45deg) rotateY(0deg) rotateX(0deg);
      }
      to {
        transform: rotate(45deg) rotateY(360deg) rotateX(-360deg);
      }
    `} 10s infinite linear;
`;
const RotateBoxFace = styled(Box).attrs({
  width: ["50px", "100px", "150px"],
  height: ["50px", "100px", "150px"],
})`
  position: absolute;
  top: 50%;
  left: 50%;
  background-size: 100% 100%;
  /* box-shadow: inset 0 0 1px 1px #0005; */
  transform-style: preserve-3d;
  &:nth-child(1) {
    background-image: linear-gradient(90deg, #646f79 0% 10%, #00c4ff 10% 20%, #646f79 20% 80%, #00c4ff 80% 90%, #646f79 90% 100%);
    transform: translate(-50%, -50%) rotateY(0deg) rotateY(90deg) translateX(50%) rotateY(-90deg);
  }
  &:nth-child(2) {
    background-image: linear-gradient(90deg, #646f79 0% 10%, #00c4ff 10% 20%, #646f79 20% 80%, #00c4ff 80% 90%, #646f79 90% 100%);
    transform: translate(-50%, -50%) rotateY(90deg) rotateY(90deg) translateX(50%) rotateY(-90deg);
  }
  &:nth-child(3) {
    background-image: linear-gradient(90deg, #646f79 0% 10%, #00c4ff 10% 20%, #646f79 20% 80%, #00c4ff 80% 90%, #646f79 90% 100%);
    transform: translate(-50%, -50%) rotateY(180deg) rotateY(90deg) translateX(50%) rotateY(-90deg);
  }
  &:nth-child(4) {
    background-image: linear-gradient(90deg, #646f79 0% 10%, #00c4ff 10% 20%, #646f79 20% 80%, #00c4ff 80% 90%, #646f79 90% 100%);
    transform: translate(-50%, -50%) rotateY(270deg) rotateY(90deg) translateX(50%) rotateY(-90deg);
  }
  &:nth-child(5) {
    background-image: linear-gradient(180deg, transparent 0% 10%, #00c4ff 10% 20%, transparent 20% 80%, #00c4ff 80% 90%, transparent 90% 100%), linear-gradient(90deg, #646f79 0% 10%, #00c4ff 10% 20%, #646f79 20% 80%, #00c4ff 80% 90%, #646f79 90% 100%);
    transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) translateX(50%) rotateY(-90deg);
  }
  &:nth-child(6) {
    background-image: linear-gradient(180deg, transparent 0% 10%, #00c4ff 10% 20%, transparent 20% 80%, #00c4ff 80% 90%, transparent 90% 100%), linear-gradient(90deg, #646f79 0% 10%, #00c4ff 10% 20%, #646f79 20% 80%, #00c4ff 80% 90%, #646f79 90% 100%);
    transform: translate(-50%, -50%) rotateX(-90deg) rotateY(90deg) translateX(50%) rotateY(-90deg);
  }
`;
const RotateBoxCont = styled(Box)`
  perspective: 1000px;
  transform-style: preserve-3d;
`;

export default About;
