import {UIButton} from "@ui/button";
import {ActionsContainer} from "@ui/header/Styles";
import {UIInput} from "@ui/input";
import {FC} from "react";
import {ModalBackground, ModalContent, ModalHeader} from "./Styles";

const UIModalContent: FC<{onRunBuild: any}> = ({onRunBuild}) => {
  return (
    <ModalBackground>
      <ModalContent>
        <ModalContent>
          <ModalHeader>New build</ModalHeader>
          <UIInput
            {...{
              label: "Enter the commit hash which you want to build.",
              initialValue: "",
              placeholder: "Commit hash",
              isRequired: false,
              handler: () => {}
            }}
          />
          <ActionsContainer>
            <UIButton {...{label: "Run build", theme: "primary"}} />
            <UIButton
              {...{
                label: "Cancel",
                onClick: onRunBuild
              }}
            />
          </ActionsContainer>
        </ModalContent>
      </ModalContent>
    </ModalBackground>
  );
};

export default UIModalContent;
