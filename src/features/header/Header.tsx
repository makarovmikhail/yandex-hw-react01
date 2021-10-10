import {useHistory, useLocation} from "react-router-dom";
import {SettingsIconWrapper, RunIconWrapper} from "@ui/header/Styles";

import UIHeader from "@ui/header/Header";

import routes from "@routes";
import {useState} from "react";
import {Modal} from "@features/layouts/modal";
import UIModalContent from "@features/layouts/modal/ModalContent";

const Header = () => {
  const [isModal, setIsModal] = useState(false);

  const history = useHistory();
  const location = useLocation();

  const commitHeader = "philip1967/my-awesome-repo";
  const primaryHeader = "School CI server";

  const uiHeaderProps = {
    history: {
      header: commitHeader,
      theme: "secondary",
      actions: [
        {
          action: "build",
          text: "Run build",
          icon: <RunIconWrapper />,
          onClick: () => {
            setIsModal(!isModal);
          }
        },
        {
          action: "settings",
          text: "",
          icon: <SettingsIconWrapper />,
          onClick: () => {
            history.push(routes.settings);
          }
        }
      ]
    },
    settings: {header: primaryHeader, theme: "primary", actions: []},
    default: {
      header: primaryHeader,
      theme: "primary",
      actions: [
        {
          action: "settings",
          text: "Settings",
          icon: <SettingsIconWrapper />,
          onClick: () => {
            history.push(routes.settings);
          }
        }
      ]
    }
  };
  let props = uiHeaderProps.default;
  if (location.pathname === routes.history) props = uiHeaderProps.history;
  if (location.pathname === routes.settings) props = uiHeaderProps.settings;
  return (
    <>
      <UIHeader {...props} />
      {isModal && (
        <Modal
          onClose={() => {
            // setIsModal(false);
          }}
        >
          <UIModalContent
            {...{
              onRunBuild: () => {
                setIsModal(false);
              }
            }}
          />
        </Modal>
      )}
    </>
  );
};

export default Header;
