import styled from "styled-components";

export const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid:
    "header" minmax(48px, 48px)
    "content" minmax(auto, auto)
    "footer" minmax(32px, 32px);
  @media (max-width: 320px) {
    grid:
      "header" minmax(52px, 52px)
      "content" minmax(auto, auto)
      "footer" minmax(68px, 68px);
  }
`;

export const ContentLayout = styled.div`
  grid-area: content;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 100px;
  box-sizing: border-box;
  @media (max-width: 320px) {
    padding: 0 16px;
  }
`;

export const UIContent = styled(ContentLayout)`
  justify-content: center;
  gap: 32px;
  align-items: center;
`;

export const ContentText = styled.span`
  font-family: "YS Text", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 1.25;
  color: #000000;
`;

export const ContentMessage = styled.span`
  height: 32px;
  width: 264px;
  display: flex;
  text-align: center;
`;
