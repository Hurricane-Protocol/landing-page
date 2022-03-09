import { Box, Image } from "../../components/base";
import { Container, ContainerFluid } from "../../components/containers";
import { IconBtn } from "../../components/elements/button";
import { LaunchIcon } from "../../components/elements/icons";

const FAQ = () => {
  return (
    <ContainerFluid display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Container flex={1} py={["10px", "40px", "60px"]} display={"flex"} flexDirection={"column"} gridGap={["30px", "40px", "50px"]}>
        <Box mx={["0px", "50px", "100px"]} fontFamily={"artFont"} fontWeight={"900"} fontSize={["40px", "36px", "32px", "42px", "50px"]} lineHeight={"1em"} color={"white"}>
          FAQ
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Box px={"10px"} py={["18px", "20px", "28px"]} borderBottomWidth={"0.5px"} borderBottomStyle={"dashed"} borderBottomColor={"white"} borderBottomRightRadius={["10px", "20px", "30px"]} fontSize={["12px", "14px", "16px"]} color={"white"}>
            Is it possible to compromise the protocol and find out information about depositors?
          </Box>
          <Box px={"10px"} py={["18px", "20px", "28px"]} borderBottomWidth={"0.5px"} borderBottomStyle={"dashed"} borderBottomColor={"white"} borderBottomRightRadius={["10px", "20px", "30px"]} fontSize={["12px", "14px", "16px"]} color={"white"}>
            Do you collect data?
          </Box>
          <Box px={"10px"} py={["18px", "20px", "28px"]} borderBottomWidth={"0.5px"} borderBottomStyle={"dashed"} borderBottomColor={"white"} borderBottomRightRadius={["10px", "20px", "30px"]} fontSize={["12px", "14px", "16px"]} color={"white"}>
            Which steps can be taken to ensure the anonymity of participation in the protocol?
          </Box>
          <Box px={"10px"} py={["18px", "20px", "28px"]} borderBottomWidth={"0.5px"} borderBottomStyle={"dashed"} borderBottomColor={"white"} borderBottomRightRadius={["10px", "20px", "30px"]} fontSize={["12px", "14px", "16px"]} color={"white"}>
            Has the protocol been audited?
          </Box>
          <Box px={"10px"} py={["18px", "20px", "28px"]} borderBottomWidth={"0.5px"} borderBottomStyle={"dashed"} borderBottomColor={"white"} borderBottomRightRadius={["10px", "20px", "30px"]} fontSize={["12px", "14px", "16px"]} color={"white"}>
            What is a relayer?
          </Box>
          <Box px={"10px"} py={["18px", "20px", "28px"]} borderBottomWidth={"0.5px"} borderBottomStyle={"dashed"} borderBottomColor={"white"} borderBottomRightRadius={["10px", "20px", "30px"]} fontSize={["12px", "14px", "16px"]} color={"white"}>
            Is the code open-source?
          </Box>
          <Box px={"10px"} py={["18px", "20px", "28px"]} borderBottomWidth={"0.5px"} borderBottomStyle={"dashed"} borderBottomColor={"white"} borderBottomRightRadius={["10px", "20px", "30px"]} fontSize={["12px", "14px", "16px"]} color={"white"}>
            Can I prove my source of funds if I use Hurricane App?
          </Box>
          <Box px={"10px"} py={["18px", "20px", "28px"]} borderBottomWidth={"0.5px"} borderBottomStyle={"dashed"} borderBottomColor={"white"} borderBottomRightRadius={["10px", "20px", "30px"]} fontSize={["12px", "14px", "16px"]} color={"white"}>
            What is contract address on Terra Finder?
          </Box>
        </Box>
      </Container>
    </ContainerFluid>
  );
};

export default FAQ;
