import React, { useRef } from "react";

const Component = () => {
  const inputRef = useRef();

  return (
    <div>
      <div className="mt-3">
        <input ref={inputRef} />
      </div>

      <div className="mt-3">
        <button
          className="btn btn-success"
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          focus
        </button>
      </div>

      <div className="mt-3">
        <button
          className="btn btn-danger"
          onClick={() => {
            inputRef.current.blur();
          }}
        >
          blur
        </button>
      </div>
    </div>
  );
};

export default Component;
