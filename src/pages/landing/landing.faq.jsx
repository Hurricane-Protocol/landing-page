import { useEffect, useRef, useState } from "react";
import { Box, Image } from "../../components/base";
import { Container, ContainerFluid } from "../../components/containers";
import { IconBtn } from "../../components/elements/button";
import { LaunchIcon } from "../../components/elements/icons";

const FAQ = () => {
  const faqList = [
    {
      title: "Is it possible to compromise the protocol and find out information about depositors?",
      content: "No, Hurricane is a decentralized protocol based on zero knowledge proofs. Only the user possessing the 'NoteString' is able to link deposit and withdrawl.",
    },
    {
      title: "Do you collect data?",
      content: "Hurricane Protocol does not collect any user data.",
    },
    {
      title: "Which steps can be taken to ensure the anonymity of participation in the protocol?",
      content: "Hurricane protocol solves only on-chain piece of the privacy.",
    },
    // {
    //   title: "What is a relayer?",
    //   content: "What is a relayer?What is a relayer?What is a relayer?What is a relayer?What is a relayer?",
    // },
    {
      title: "Can I prove my source of funds if I use Hurricane App?",
      content: "Yes, you can claim for your funds if you have your note string.",
    },
    {
      title: "What is contract address on Terra Finder?",
      content: "We will announce this address later.",
    },
  ];
  return (
    <ContainerFluid display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Container flex={1} py={["10px", "40px", "60px"]} display={"flex"} flexDirection={"column"} gridGap={["30px", "40px", "50px"]}>
        <Box mx={["0px", "50px", "100px"]} fontFamily={"artFont"} fontWeight={"900"} fontSize={["40px", "36px", "32px", "42px", "50px"]} lineHeight={"1em"} color={"white"}>
          FAQ
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          {faqList.map((each, index) => {
            return <Collapse title={each.title} content={each.content}></Collapse>;
          })}
        </Box>
      </Container>
    </ContainerFluid>
  );
};

const Collapse = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(null);
  const contentBox = useRef(null);
  const resizeHandle = () => {
    setContentHeight(contentBox.current && contentBox.current.scrollHeight);
  };
  useEffect(() => {
    resizeHandle();
    window.addEventListener("resize", resizeHandle);
    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);
  return (
    <Box px={"10px"} py={["18px", "20px", "28px"]} borderBottomWidth={"0.5px"} borderBottomStyle={"dashed"} borderBottomColor={"white"} borderBottomRightRadius={["10px", "20px", "30px"]} fontSize={["12px", "14px", "16px"]} color={"white"}>
      <Box
        cursor={"pointer"}
        opacity={isExpanded ? "0.6" : "1"}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {title}
      </Box>
      <Box pt={isExpanded ? ["18px", "20px", "28px"] : "0px"} pl={"2%"} ref={contentBox} maxHeight={isExpanded ? contentHeight : "0px"} overflow={"hidden"} transition={"var(--transition)"} boxSizing={"content-box"}>
        {content}
      </Box>
    </Box>
  );
};

export default FAQ;
