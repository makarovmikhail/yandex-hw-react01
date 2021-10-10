import styled from "styled-components";

const getStatusIdColor = (theme: string) => {
  if (theme === "fulfilled") return "#00b341";
  if (theme === "rejected") return "#FF3333";
  return "#FF9A00";
};

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  // align-items: center;
  gap: 4px;
  @media (max-width: 320px) {
    flex-direction: column;
  }
`;

export const StatusIdText = styled.span`
  font-family: "YS Text", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: ${(props) => getStatusIdColor(props.theme)};
`;

export const StatusMessageText = styled.span`
  font-family: "YS Text", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 1.33;
  color: #000000;
`;
