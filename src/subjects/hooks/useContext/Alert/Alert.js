import React from "react";
import { useAlert } from "./AlertContext";

const Alert = () => {
  // const alert = useAlert().visible;
  const { visible } = useAlert();

  if (!visible) {
    return null;
  }

  return <div className="alert alert-danger">Alert</div>;
};

export default Alert;
