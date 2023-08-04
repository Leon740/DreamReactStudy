import React, { useRef, useState } from 'react';

// === Concept
// You can't control the input
// Motivation
// More ability to control the logic of the component

function Form() {
  const [inputValue, setInputValue] = useState();
  const inputRef = useRef(null);

  const handleFormSubmit = () => {
    console.log(inputRef.current.value);
    setInputValue(inputRef.current.value);
  };

  return (
    <div>
      <h3>
        Dream is
        {inputValue}
      </h3>
      <input ref={inputRef} />
      <button type="button" onClick={handleFormSubmit}>Submit</button>
    </div>
  );
}

export default Form;
