import {UIForm} from "@ui/form";
import {useSelector, useDispatch} from "react-redux";
import {updateSettings} from "@data-access/slice";
import {useState} from "react";
import {RootState} from "@data-access/store";
import UIModalContent from "@features/layouts/modal/ModalError";
import {Modal} from "@features/layouts/modal";

const Form = () => {
  const [isModal, setIsModal] = useState(false);
  const [message, setMessage] = useState("Error");

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
          setSave(false);
          setCancel(false);
          const isSucced = Math.random() < 0.5;
          if (isSucced) {
            setMessage("Some error has happened");
            setIsModal(true);
          }
        }, 3000);
      } else {
        setMessage("Vlidation failed");
        setIsModal(true);
      }
    },
    onCancel: (e: Event) => {
      e.preventDefault();
    }
  };
  return (
    <>
      <UIForm {...formProps} />
      {isModal && (
        <Modal
          onClose={() => {
            // setIsModal(false);
          }}
        >
          <UIModalContent
            onClose={() => {
              setIsModal(false);
            }}
            message={message}
          />
        </Modal>
      )}
    </>
  );
};

export default Form;
