import React, { useState } from "react";

// === Concept
// you control the (input) with state: value, onChange
// Motivation
// more ability to control the logic of the component

const Form = () => {
  const [inputValue, setInputValue] = useState("Evo 9");

  return (
    <div>
      <h3>Dream is {inputValue}</h3>
      <input
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
    </div>
  );
};

export default Form;
