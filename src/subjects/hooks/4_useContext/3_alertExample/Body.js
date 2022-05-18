/* eslint-disable react/prop-types */
import React from "react";
import { useAlert } from "./AlertContext";

const Main = () => {
  // const toggleAlert = useAlert().toggle;
  const { toggle } = useAlert();

  return (
    <div>
      <button onClick={toggle}>toggleAlert</button>
    </div>
  );
};

export default Main;
