import React, { useContext } from "react";
import ComponentsContext from "./ComponentsContext";

const GrandChild = () => {
  const { carName, setCarName } = useContext(ComponentsContext);

  return (
    <>
      <code>GrandChild :</code>
      <br />
      <input
        value={carName}
        onChange={event => setCarName(event.target.value)}
      />
    </>
  );
};

export default GrandChild;
