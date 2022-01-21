import React from "react";
import ReactDOM from "react-dom";
import MobileNav from "./components/MobileNav";
import { Link } from "react-router-dom";

import "./Modal.css";
import Toggle from "./components/toggle/Toggle";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay"></div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
