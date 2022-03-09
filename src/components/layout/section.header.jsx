import styled from "styled-components";
import { Box } from "../base";

const Header = ({ title, subTitle, ...props }) => {
  return (
    <>
      {(title || subTitle) && (
        <Box width={"100%"} {...props} mb={[8, 8, 8, 15]}>
          {title && <SectionTitle>{title}</SectionTitle>}
          {subTitle && <SectionSubTitle>{subTitle}</SectionSubTitle>}
        </Box>
      )}
    </>
  );
};

export const SectionTitle = styled(Box).attrs({
  fontSize: [3, 5, 7, 9, 11],
  fontWeight: 3,
  lineHeight: [6, 8, 10, 12, 15],
  textAlign: "center",
})``;

export const SectionSubTitle = styled(Box).attrs({
  mt: [2, 2, 2, 3],
  fontSize: [1, 2, 2, "17px", "18px"],
  fontWeight: 3,
  lineHeight: [4, 4, 5, 5, 6],
  textAlign: "center",
})``;

export default Header;
