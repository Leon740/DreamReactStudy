import React, { useState } from "react";

const CarDream = () => {
  const [carName, setCarName] = useState("Evo 9");

  return (
    <div>
      <h3 className="mt-5">
        My <u>Dream</u> Car is {carName}
      </h3>

      <div className="mt-3">
        <input
          value={carName}
          onChange={event => {
            setCarName(event.target.value);
          }}
        />
        <button
          className="btn btn-danger"
          onClick={() => {
            setCarName("");
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default CarDream;
