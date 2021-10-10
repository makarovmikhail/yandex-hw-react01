import styled from "styled-components";

export const ModalBackground = styled.div`
  padding: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  width: 485px;
  margin: auto;
  box-shadow: 0px 0px 1px rgba(67, 68, 69, 0.3),
    0px 6px 16px rgba(67, 68, 69, 0.3);
  border-radius: 4px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalHeader = styled.span`
  font-family: "YS Text", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.22;
  color: #000000;
`;
