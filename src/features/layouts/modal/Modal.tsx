import {FC} from "react";
import Portal from "./Portal";

interface ModalProps {
  onClose: any;
  children: any;
}

const Modal: FC<ModalProps> = ({children, onClose}) => {
  return <Portal {...{onClose}}>{children}</Portal>;
};

export default Modal;
