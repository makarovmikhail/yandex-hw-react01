import {
  ActionButtonText,
  ActionButton,
  ActionButtonContent,
  ActionsContainer,
  HeaderContainer,
  HeaderText,
  ActionButtonTextContainer
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
              <ActionButtonTextContainer>
                {a.text && <ActionButtonText>{a.text}</ActionButtonText>}
              </ActionButtonTextContainer>
            </ActionButtonContent>
          </ActionButton>
        ))}
      </ActionsContainer>
    </HeaderContainer>
  );
};

export default UIHeader;
