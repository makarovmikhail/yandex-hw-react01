import {FC, useState} from "react";
import {
  NumericInputFeature,
  NumericStyledInput,
  LabelContainer,
  LabelText
} from "./Styles";

export interface IInputProps {
  prefixLabel: string;
  label: string;
  initialValue: string;
  placeholder: string;
}

const UINumericInput: FC<IInputProps> = ({
  prefixLabel,
  label,
  initialValue,
  placeholder
}) => {
  const [value, setValue] = useState(initialValue);
  return (
    <NumericInputFeature>
      <LabelContainer>
        <LabelText>{prefixLabel}</LabelText>
      </LabelContainer>
      <NumericStyledInput
        type="text"
        placeholder={placeholder}
        pattern="[0-9]+"
        value={value}
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
        }}
      />
      <LabelContainer>
        <LabelText>{label}</LabelText>
      </LabelContainer>
    </NumericInputFeature>
  );
};

export default UINumericInput;
