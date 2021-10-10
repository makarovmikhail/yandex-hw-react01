import {FC, ReactNode} from "react";
import {Layout} from "./Styles";

interface IStartScreenProps {
  children: ReactNode;
}

const StartScreen: FC<IStartScreenProps> = ({children}) => {
  return <Layout>{children}</Layout>;
};

export default StartScreen;
