import React from "react";
import ReactDOM from "react-dom";
import ModalContent from "./ModalContent";

// === Concept
// === Problem
// imagine we have a modal or a tooltip, we need to render it outside of our component's DOM tree
// === Solution
// ReactDOM.createPortal(elementToRender, placeToRender);
// elementToRender = component, element
// placeToRender = element in DOM

const Modal = () => {
  const domNode = document.getElementById("modal");

  // <ModalContent /> will be rendered outside of our component, in (domNode)
  return ReactDOM.createPortal(<ModalContent />, domNode);
};

export default Modal;
