import styled from "styled-components";
import { Box } from "../base";

const FlexBox = styled(Box).attrs({
  display: "flex",
})``;
export const ContainerFluid = styled(FlexBox).attrs({
  width: "100%",
  px: [3],
})``;
export const Container = styled(FlexBox).attrs({
  width: "100%",
  maxWidth: "1360px",
})``;
export const ContainerMin = styled(FlexBox).attrs({
  width: "100%",
  maxWidth: "800px",
})``;
