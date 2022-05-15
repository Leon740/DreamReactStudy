import React from "react";
import { useAlert } from "./AlertContext";

const Alert = () => {
  const { visible, hide, text } = useAlert();

  if (!visible) {
    return null;
  }

  return (
    <div className="alert alert-danger">
      Alert <button onClick={() => hide("close")}>Hide Alert, {text}</button>
    </div>
  );
};

export default Alert;
