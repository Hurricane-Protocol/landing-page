import { Box, Image } from "../../components/base";
import { Container, ContainerFluid } from "../../components/containers";
import { IconBtn } from "../../components/elements/button";
import { LaunchIcon } from "../../components/elements/icons";

const Direction = () => {
  return (
    <ContainerFluid display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Container flex={1} py={"120px"} display={"flex"} flexDirection={"column"} gridGap={["35px", "40px", "50px"]}>
        <Box mx={["unset", "unset", "100px"]} fontFamily={"artFont"} fontWeight={"900"} fontSize={["24px", "32px", "42px", "50px"]} lineHeight={"1em"} color={"white"}>
          Main Direction
        </Box>
        <Box display={"flex"} flexDirection={["column", "column", "row"]} justifyContent={["space-around"]} alignItems={["center", "center", "flex-start"]} gridGap={"20px"}>
          <Box flex={1} maxWidth={["90%", "80%", "300px"]} display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={["row", "row", "column"]} gridGap={["4px", "12px", "20px"]}>
            <Box width={["auto", "auto", "100%"]} display={"flex"} justifyContent={"center"}>
              <Image src={require("../../assets/image/landing/direction1.png")} height={["80px", "120px", "160px", "200px"]} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gridGap={["4px", "12px", "20px"]}>
              <Box fontFamily={"artFont"} fontWeight={"900"} fontSize={["18px", "22px", "25px"]} color={"white"}>
                High Transfers Security
              </Box>
              <Box fontSize={["8px", "12px", "16px", "20px"]} lineHeight={"1.25em"} color={"white"}>
                A user generates a random key (note) and deposits LUNA or UST, along with submitting a hash of the note to the Hurricane Protocol contract.
              </Box>
            </Box>
          </Box>
          <Box flex={1} maxWidth={["90%", "80%", "300px"]} display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={["row", "row", "column"]} gridGap={["4px", "12px", "20px"]}>
            <Box width={["auto", "auto", "100%"]} display={"flex"} justifyContent={"center"}>
              <Image src={require("../../assets/image/landing/direction2.png")} height={["80px", "120px", "160px", "200px"]} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gridGap={["4px", "12px", "20px"]}>
              <Box fontFamily={"artFont"} fontWeight={"900"} fontSize={["18px", "22px", "25px"]} color={"white"}>
                Investment Strategy
              </Box>
              <Box fontSize={["8px", "12px", "16px", "20px"]} lineHeight={"1.25em"} color={"white"}>
                {/* After depositing, users should wait some amount of time before withdrawing to improve their privacy. */}
                Hurricane provides vaults that are pools of capital that automatically generate yield basaed on pre-determined strategies. (Anchor Vault)
              </Box>
            </Box>
          </Box>
          <Box flex={1} maxWidth={["90%", "80%", "300px"]} display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"} flexDirection={["row", "row", "column"]} gridGap={["4px", "12px", "20px"]}>
            <Box width={["auto", "auto", "100%"]} display={"flex"} justifyContent={"center"}>
              <Image src={require("../../assets/image/landing/direction3.png")} height={["80px", "120px", "160px", "200px"]} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gridGap={["4px", "12px", "20px"]}>
              <Box fontFamily={"artFont"} fontWeight={"900"} fontSize={["18px", "22px", "25px"]} color={"white"}>
                Inspiring NFTs
              </Box>
              <Box fontSize={["8px", "12px", "16px", "20px"]} lineHeight={"1.25em"} color={"white"}>
                {/* A user submits a proof of having the valid key to one of the notes deposited and the contract transfers LUNA or UST to a specified recipient. */}
                Every user can purchase our different collection NFTs and can stake NFT for reward rare NFTs on the basis of our tokenomics.
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </ContainerFluid>
  );
};

export default Direction;
