import {FC} from "react";
import {StatusContainer, StatusIdText, StatusMessageText} from "./Styles";

export interface UIStatusProps {
  id: string;
  message: string;
  status?: string;
}

const UIStatus: FC<UIStatusProps> = ({id, message, status}) => {
  return (
    <StatusContainer>
      <StatusIdText {...{theme: status}}>{id}</StatusIdText>
      <StatusMessageText>{message}</StatusMessageText>
    </StatusContainer>
  );
};

export default UIStatus;
