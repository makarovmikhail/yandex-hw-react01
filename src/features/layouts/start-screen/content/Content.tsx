import {ReactComponent as ConfigureIcon} from "@icons/logo3.svg";
import {useHistory} from "react-router";
import {Button} from "../../../button";
import {ContentMessage, UIContent} from "@ui/layouts/start-screen/Styles";
import {ContentText} from "@ui/layouts/start-screen/Styles";

const Content = () => {
  const history = useHistory();
  return (
    <UIContent>
      <ConfigureIcon />
      <ContentMessage>
        <ContentText>
          Configure repository connection and synchronization settings
        </ContentText>
      </ContentMessage>
      <Button
        {...{theme: "primary", label: "Open settings"}}
        onClick={() => {
          history.push("/history");
        }}
      />
    </UIContent>
  );
};

export default Content;
