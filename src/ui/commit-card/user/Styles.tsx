import styled from "styled-components";
import {ReactComponent as UserIcon} from "@icons/user.svg";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  @media (max-width: 320px) {
    flex-direction: row;
    gap: 10px;
    padding-bottom: 8px;
    border-bottom: 1px solid #F0F2F3;
    box-sizing: border-box;
  }
`;

export const UserText = styled.span`
  font-family: "YS Text", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 1.23;
  letter-spacing: 0.06px;
  color: #000000;
`;

export const UserIconWrapper = styled(UserIcon)`
  opacity: 0.3;
  height: 14px;
  width: 12.25px;
`;
