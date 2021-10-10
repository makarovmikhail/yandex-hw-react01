import {FC} from "react";
import {Label, PrimaryButton} from "./Styles";

export interface IButtonProps {
  label: string;
  theme?: "primary" | "secondary";
  onClick?: any;
  isDisabled?: boolean;
}

const Button: FC<IButtonProps> = ({label, theme, onClick, isDisabled}) => {
  return (
    <PrimaryButton {...{theme, onClick}} disabled={isDisabled}>
      <Label>{label}</Label>
    </PrimaryButton>
  );
};

export default Button;
