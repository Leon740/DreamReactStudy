import React, { useRef, useState } from "react";

// Concept
// you can't control the input
// more ability to control the logic of the component

const Form = () => {
  const [inputValue, setInputValue] = useState();
  const inputRef = useRef(null);

  const handleFormSubmit = () => {
    console.log(inputRef.current.value);
    setInputValue(inputRef.current.value);
  };

  return (
    <div>
      <h3>Dream is {inputValue}</h3>
      <input ref={inputRef} />
      <button onClick={handleFormSubmit}>Submit</button>
    </div>
  );
};

export default Form;
