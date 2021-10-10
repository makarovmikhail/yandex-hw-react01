import {FC, ReactNode} from "react";
import {ContentLayout} from "@ui/layouts/start-screen/Styles";
import {
  SubHeaderContainer,
  SubHeaderDescriptionText,
  SubHeaderText
} from "./Styles";

interface IUISettingsProps {
  children: ReactNode;
}

const UISettings: FC<IUISettingsProps> = ({children}) => {
  return (
    <ContentLayout>
      <SubHeaderContainer>
        <SubHeaderText>Settings</SubHeaderText>
        <SubHeaderDescriptionText>
          Configure repository connection and synchronization settings.
        </SubHeaderDescriptionText>
      </SubHeaderContainer>
      {children}
    </ContentLayout>
  );
};

export default UISettings;
