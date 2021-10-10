import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 24px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(67, 68, 69, 0.3),
    0px 1px 1px rgba(67, 68, 69, 0.3);
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 1px rgba(67, 68, 69, 0.3),
      0px 2px 8px rgba(67, 68, 69, 0.3);
  }

  @media (max-width: 320px) {
    flex-direction: column;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CommitDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 320px) {
    flex-direction: column;
  }
`;

export const CommitDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
`;
