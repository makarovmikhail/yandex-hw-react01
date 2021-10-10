import {
  ActionButtonText,
  ActionButton,
  ActionButtonContent,
  ActionsContainer,
  HeaderContainer,
  HeaderText
} from "./Styles";

import {FC} from "react";

interface IUIHeaderProps {
  header: string;
  actions:
    | Array<{
        action: string;
        icon: any;
        text?: string;
        onClick: any;
      }>
    | [];
  theme?: "primary" | "secondary" | string;
}

const UIHeader: FC<IUIHeaderProps> = ({header, theme, actions}) => {
  return (
    <HeaderContainer>
      <HeaderText {...{theme}}>{header}</HeaderText>
      <ActionsContainer>
        {actions.map((a) => (
          <ActionButton onClick={a.onClick} key={a.text}>
            <ActionButtonContent>
              {a.icon}
              {a.text && <ActionButtonText>{a.text}</ActionButtonText>}
            </ActionButtonContent>
          </ActionButton>
        ))}
      </ActionsContainer>
    </HeaderContainer>
  );
};

export default UIHeader;
