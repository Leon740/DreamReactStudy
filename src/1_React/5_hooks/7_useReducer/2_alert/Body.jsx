/* eslint-disable react/prop-types */
import React from "react";
import { useAlert } from "./AlertContext";

const Main = () => {
  const { show } = useAlert();

  return (
    <div>
      <button onClick={() => show("This text is from Body.js")}>
        Show Alert
      </button>
    </div>
  );
};

export default Main;
