import React, { useRef } from 'react';
import Input from './Input';
import Button from './Button';

function Component() {
  const inputRef = useRef();

  const onChange = (value) => {
    console.log(value);
  };

  return (
    <div>
      <div className="mt-3">
        <Input ref={inputRef} onChange={onChange} />
      </div>

      <div className="mt-3">
        <Button
          className="success"
          label="focus"
          onClick={() => inputRef.current.focus()}
        />
      </div>

      <div className="mt-3">
        <Button
          className="danger"
          label="blur"
          onClick={() => inputRef.current.blur()}
        />
      </div>
    </div>
  );
}

export default Component;
