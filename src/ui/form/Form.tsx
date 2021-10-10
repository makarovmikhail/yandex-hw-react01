import {FC} from "react";
import {UIInput, UINumericInput} from "@ui/input";
import {ButtonsContainer, FormContainer} from "./Styles";
import {UIButton} from "@ui/button";

interface IUIFormProps {
  initialValues: any;
  onSave: any;
  onCancel: any;
}

const UIForm: FC<IUIFormProps> = ({initialValues, onSave, onCancel}) => {
  return (
    <FormContainer>
      <UIInput
        {...{
          label: "GitHub repository",
          initialValue: initialValues.repo,
          placeholder: "user-name/repo-name",
          isRequired: true
        }}
      />
      <UIInput
        {...{
          label: "Build command",
          initialValue: initialValues.build,
          placeholder: "npm ci && npm run build",
          isRequired: true
        }}
      />
      <UIInput
        {...{
          label: "Main branch",
          initialValue: initialValues.branch,
          placeholder: "master |",
          isRequired: false
        }}
      />
      <UINumericInput
        {...{
          prefixLabel: "Synchronize every",
          label: "minutes",
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
