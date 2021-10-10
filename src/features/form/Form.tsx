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

  const [save, setSave] = useState(false);
  const [cancel, setCancel] = useState(false);

  const formProps = {
    ...{initialValues},
    handlers: {
      repo: setRepo,
      build: setBuild,
      branch: setBranch,
      time: setTime
    },
    disabled: {
      save,
      cancel
    },
    onSave: (e: Event) => {
      e.preventDefault();

      if (repo && build) {
        setSave(true);
        setCancel(true);
        console.log("OK");
        setTimeout(() => {
          dispatch(updateSettings({isSet: true, repo, build, branch, time}));
          console.log("FINISHED");
          setSave(false);
          setCancel(false);
        }, 3000);
      } else {
        console.log("Validation failed");
      }
    },
    onCancel: (e: Event) => {
      e.preventDefault();
    }
  };
  return <UIForm {...formProps} />;
};

export default Form;
