import {FC, useState} from "react";
import {
  Clear,
  ClearContainer,
  InputContainer,
  InputFeature,
  LabelContainer,
  LabelRequired,
  LabelText,
  StyledInput
} from "./Styles";

export interface IInputProps {
  label: string;
  initialValue: string;
  handler?: any;
  placeholder: string;
  isRequired: boolean;
}

const Input: FC<IInputProps> = ({
  label,
  initialValue,
  handler,
  placeholder,
  isRequired
}) => {
  const [value, setValue] = useState(initialValue);
  return (
    <InputFeature>
      <LabelContainer>
        <LabelText>{label}</LabelText>
        {isRequired && <LabelRequired>*</LabelRequired>}
      </LabelContainer>
      <InputContainer>
        <StyledInput
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            e.preventDefault();
            setValue(e.target.value);
            handler(e.target.value);
          }}
        />
        <ClearContainer>
          <Clear
            onClick={() => {
              setValue("");
            }}
          />
        </ClearContainer>
      </InputContainer>
    </InputFeature>
  );
};

export default Input;
