import {FC} from "react";
import {Label, PrimaryButton} from "./Styles";

export interface IButtonProps {
  label: string;
  theme?: "primary" | "secondary";
  onClick?: any;
}

const Button: FC<IButtonProps> = ({label, theme, onClick}) => {
  return (
    <PrimaryButton {...{theme, onClick}}>
      <Label>{label}</Label>
    </PrimaryButton>
  );
};

export default Button;
