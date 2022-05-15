import React from "react";
import { AlertProvider } from "./AlertContext";
import Alert from "./Alert";
import Body from "./Body";

const Main = () => {
  return (
    <AlertProvider>
      <Alert />
      <Body />
    </AlertProvider>
  );
};

export default Main;
