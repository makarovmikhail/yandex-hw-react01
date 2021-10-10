import {UIForm} from "@ui/form";
// import {useState} from "react";

const Form = () => {
  // const [repo, setRepo] = useState();
  // const [build, setBuild] = useState();
  // const [branch, setBranch] = useState();
  const formProps = {
    initialValues: {
      repo: "",
      build: "npm ci && npm run build",
      branch: "master |",
      time: 10
    },
    onSave: (e: Event) => {
      e.preventDefault();
      console.log("Save", e);
    },
    onCancel: (e: Event) => {
      e.preventDefault();
      console.log("Cancel", e);
    }
  };
  return <UIForm {...formProps} />;
};

export default Form;
