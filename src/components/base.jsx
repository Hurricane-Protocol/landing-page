import styled from "styled-components";

import { background, border, color, compose, flexbox, grid, layout, position, shadow, space, typography } from "styled-system";

export const allComposedAttrs = compose(background, border, color, flexbox, grid, layout, position, shadow, space, typography);

export const Box = styled.div`
  ${allComposedAttrs}
  backdrop-filter: ${(p) => (p.backdropFilter ? p.backdropFilter : "unset")};
  box-sizing: ${(p) => (p.boxSizing ? p.boxSizing : "border-box")};
  transition: ${(p) => (p.transition ? p.transition : "reverse")};
  transform: ${(p) => (p.transform ? p.transform : "unset")};
  background-blend-mode: ${(p) => (p.backgroundBlendMode ? p.backgroundBlendMode : "reverse")};
  word-break: ${(p) => (p.wordBreak ? p.wordBreak : "reverse")};
  white-space: ${(p) => (p.whiteSpace ? p.whiteSpace : "reverse")};
  cursor: ${(p) => (p.cursor ? p.cursor : "unset")};
  -webkit-background-clip: ${(p) => (p.backClip ? p.backClip : "reverse")};
`;

export const HR = styled.hr`
  ${allComposedAttrs}
  backdrop-filter: ${(p) => (p.backDrop ? p.backDrop : "unset")};
  box-sizing: ${(p) => (p.boxSizing ? p.boxSizing : "unset")};
  transition: ${(p) => (p.transition ? p.transition : "reverse")};
  transform: ${(p) => (p.transform ? p.transform : "unset")};
`;

export const ScrollHideContainer = styled(Box)`
  overflow: auto;
  &::-webkit-scrollbar {
    display: none !important;
  }
`;

export const Image = styled.img`
  ${allComposedAttrs}
  transform: ${(p) => (p.transform ? p.transform : "unset")};
  filter: ${(p) => (p.filter ? p.filter : "unset")};
  cursor: ${(p) => (p.cursor ? p.cursor : "unset")};
`;

export const Link = styled.a`
  ${allComposedAttrs}
  cursor: pointer;
  text-decoration: none;
  transform: ${(p) => (p.transform ? p.transform : "unset")};
  transition: ${(p) => (p.transition ? p.transition : "reverse")};
  transition: ${(p) => (p.whiteSpace ? p.whiteSpace : "nowrap")};
  &:hover {
    background: ${(p) => (p.hoverBg ? p.hoverBg : "reverse")};
    color: ${(p) => (p.hoverColor ? p.hoverColor : "unset")};
    text-decoration: ${(p) => (p.hoverUL ? p.hoverUL : "unset")};
  }
`;

export const TextInput = styled.input.attrs({
  type: "text",
})`
  ${allComposedAttrs}
  backdrop-filter: ${(p) => (p.backDrop ? p.backDrop : "unset")};
  box-sizing: ${(p) => (p.boxSizing ? p.boxSizing : "unset")};
  transition: ${(p) => (p.transition ? p.transition : "reverse")};
  transform: ${(p) => (p.transform ? p.transform : "unset")};
  outline: ${(p) => (p.outline ? p.outline : "unset")};
`;
