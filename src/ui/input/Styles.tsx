import styled from "styled-components";
import {ReactComponent as ClearIcon} from "@icons/clear.svg";

export const InputFeature = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const NumericInputFeature = styled(InputFeature)`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding: 2px 0 4px 0;
`;

export const StyledInput = styled.input`
  background: #ffffff;
  border: 2px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 11px 13px 10px 13px;

  font-family: "YS Text", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;

  width: 100%;

  &::placeholder,
  &::-webkit-input-placeholder {
    font-family: "YS Text", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    color: #000000;
    opacity: 0.2;
    text-align: left;
  }
`;

export const NumericStyledInput = styled(StyledInput)`
  width: 52px;
  text-align: right;
  &::placeholder {
    text-align: right;
  }
  &:invalid {
    outline: none;
    border: 2px solid red;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;

export const LabelText = styled.span`
  font-family: "YS Text", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 1.38;
  letter-spacing: 0.06px;
  color: #000000;
`;

export const LabelRequired = styled(LabelText)`
  color: #ff3333;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ClearContainer = styled.div`
  height: 100%;
  position: relative;
  display: none;
`;

export const Clear = styled(ClearIcon)`
  display: flex;
  height: 100%;
  position: absolute;
`;
