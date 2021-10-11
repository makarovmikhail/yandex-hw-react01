import {UIButton} from "@ui/button";
import {ActionsContainer} from "@ui/header/Styles";
import {SubHeaderText} from "@ui/layouts/settings/Styles";
import {FC} from "react";
import {ModalBackground, ModalContent, ModalHeader} from "./Styles";

const UIModalContent: FC<{onClose: any; message: string}> = ({
  onClose,
  message
}) => {
  return (
    <ModalBackground>
      <ModalContent>
        <ModalContent>
          <ModalHeader>Error</ModalHeader>
          <SubHeaderText>{message}</SubHeaderText>
          <ActionsContainer>
            <UIButton
              {...{
                label: "OK",
                onClick: onClose
              }}
            />
          </ActionsContainer>
        </ModalContent>
      </ModalContent>
    </ModalBackground>
  );
};

export default UIModalContent;
