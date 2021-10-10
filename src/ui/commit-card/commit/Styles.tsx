import styled from "styled-components";
import {ReactComponent as CommitIcon} from "@icons/commit.svg";

export const CommitContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const BranchText = styled.span`
  font-family: "YS Text";
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 1.23;
  letter-spacing: 0.06px;
  color: #000000;
`;

export const HashText = styled(BranchText)`
  opacity: 0.65;
`;

export const CommitIconWrapper = styled(CommitIcon)`
  display: flex;
  opacity: 0.3;
  height: 8px;
  width: 16px;
`;
