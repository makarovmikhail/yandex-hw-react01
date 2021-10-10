import {UIForm} from "@ui/form";
import {useSelector, useDispatch} from "react-redux";
import {updateSettings} from "@data-access/slice";
import {useState} from "react";
import {RootState} from "@data-access/store";

const Form = () => {
  const initialValues = {
    repo: "",
    build: "npm ci && npm run build",
    branch: "master |",
    time: 10
  };

  const settings = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();

  const [repo, setRepo] = useState(initialValues.repo);
  const [build, setBuild] = useState(initialValues.build);
  const [branch, setBranch] = useState(initialValues.branch);
  const [time, setTime] = useState(initialValues.time);

  console.log(repo, build, branch, time);

  const formProps = {
    ...{initialValues},
    handlers: {
      repo: setRepo,
      build: setBuild,
      branch: setBranch,
      time: setTime
    },
    onSave: (e: Event) => {
      e.preventDefault();
      if (repo && build) {
        console.log("OK");
      } else {
        console.log("Validation failed");
      }
      dispatch(updateSettings({isSet: true, repo, build, branch, time}));
    },
    onCancel: (e: Event) => {
      e.preventDefault();
    }
  };
  return <UIForm {...formProps} />;
};

export default Form;
