import React from "react";

const Component = () => {
  function btnClick1() {
    console.log("click 1");
  }
  function btnClick2() {
    console.log("click 2");
  }
  function btnClick3(event) {
    console.log("click 3");
    console.log(event);
  }

  return (
    <div>
      {/* call func 1 time (on initial render) */}
      <button className="mt-5" onClick={btnClick1()}>
        Click 1
      </button>
      <br />
      {/* call func each time on click */}
      <button className="mt-5" onClick={btnClick2}>
        Click 2
      </button>
      <br />
      {/* call func each time on click (the same as click2), only with args */}
      <button className="mt-5" onClick={event => btnClick3(event)}>
        Click 3
      </button>
    </div>
  );
};

export default Component;
