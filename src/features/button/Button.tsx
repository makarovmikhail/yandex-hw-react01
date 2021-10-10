import {FC} from "react";
import {IButtonProps, UIButton} from "@ui/button";

const Button: FC<IButtonProps> = ({theme, label, onClick}) => {
  return <UIButton {...{theme, label, onClick}} />;
};

export default Button;
