import React from "react";
import Toyota from "./Toyota";

const Car = () => {
  return (
    <div>
      <div>
        Toyota <Toyota model={86} />
      </div>
      <div>
        Toyota <Toyota model="Chaser" />
      </div>
      <div>
        Toyota <Toyota model="Supra" />
      </div>
      <div>
        Toyota <Toyota />
      </div>
    </div>
  );
};

export default Car;
