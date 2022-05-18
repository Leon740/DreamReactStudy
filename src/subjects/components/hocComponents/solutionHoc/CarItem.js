/* eslint-disable react/prop-types */
import React, { useState } from "react";

const CarItem = props => {
  const { type = "", initialValue = "1" } = props;
  const [carName, setCarName] = useState(initialValue);

  return (
    <div>
      <h3 className="mt-5">
        My <u>{type}</u> Car is {carName}
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

export default CarItem;
