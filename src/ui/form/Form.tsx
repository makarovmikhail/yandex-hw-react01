import {FC} from "react";
import {UIInput, UINumericInput} from "@ui/input";
import {ButtonsContainer, FormContainer} from "./Styles";
import {UIButton} from "@ui/button";

interface IUIFormProps {
  initialValues: any;
  handlers: any;
  onSave: any;
  onCancel: any;
}

const UIForm: FC<IUIFormProps> = ({initialValues, onSave, onCancel, handlers}) => {
  return (
    <FormContainer>
      <UIInput
        {...{
          label: "GitHub repository",
          initialValue: initialValues.repo,
          handler: handlers.repo,
          placeholder: "user-name/repo-name",
          isRequired: true
        }}
      />
      <UIInput
        {...{
          label: "Build command",
          initialValue: initialValues.build,
          handler: handlers.build,
          placeholder: "npm ci && npm run build",
          isRequired: true
        }}
      />
      <UIInput
        {...{
          label: "Main branch",
          initialValue: initialValues.branch,
          handler: handlers.branch,
          placeholder: "master |",
          isRequired: false
        }}
      />
      <UINumericInput
        {...{
          prefixLabel: "Synchronize every",
          label: "minutes",
          handler: handlers.time,
          initialValue: initialValues.time,
          placeholder: "10"
        }}
      />
      <ButtonsContainer>
        <UIButton {...{label: "Save", theme: "primary"}} onClick={onSave} />
        <UIButton {...{label: "Cancel"}} onClick={onCancel} />
      </ButtonsContainer>
    </FormContainer>
  );
};

export default UIForm;
