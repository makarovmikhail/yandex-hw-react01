import {FC, ReactNode} from "react";
import {ContentLayout} from "@ui/layouts/start-screen/Styles";
import {CardsContainer} from "./Styles";

interface IUIHistoryProps {
  children: ReactNode;
}

const UIHistory: FC<IUIHistoryProps> = ({children}) => {
  return (
    <ContentLayout>
      <CardsContainer>{children}</CardsContainer>
    </ContentLayout>
  );
};

export default UIHistory;
