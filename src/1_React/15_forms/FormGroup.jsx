import React from 'react';
import Form from 'react-bootstrap/Form';

function FormGroup({
  name = '', type = 'text', label = '', onChange = () => {},
}) {
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>
        {label}
      </Form.Label>
      <Form.Control
        type={type}
        onChange={(event) => onChange(name, event.target.value)}
      />
    </Form.Group>
  );
}

export default FormGroup;
