import {FC, useEffect} from "react";
import {createPortal} from "react-dom";

import "./Modal.css";

interface PortalProps {
  children: any;
  onClose: any;
}

const Portal: FC<PortalProps> = ({children, onClose}) => {
  let mount = document.getElementById("root");
  const el = document.createElement("div");

  el.setAttribute("class", "modal");

  useEffect(() => {
    mount!.appendChild(el);
    return () => {
      mount!.removeChild(el);
    };
  }, [mount, el]);

  return createPortal(children, el);
};

export default Portal;
