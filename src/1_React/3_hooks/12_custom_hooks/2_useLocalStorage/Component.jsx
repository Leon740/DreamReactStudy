/* eslint-disable no-unused-vars */
import React from 'react';
import Button from 'react-bootstrap/Button';
import useLocalStorage from './useLocalStorage';

function Item({ name = '', value = '', onChange = () => {} }) {
  return (
    <section>
      <h3>{value}</h3>
      <input
        type="text"
        placeholder={name[0].toUpperCase() + name.substring(1, name.length)}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <Button variant="warning" onClick={() => onChange('')}>
        remove
      </Button>
    </section>
  );
}

function Component() {
  const [car, setCar] = useLocalStorage('car', '');
  const [job, setJob] = useLocalStorage('job', '');

  return (
    <>
      <Item name="car" value={car} onChange={setCar} />
      <Item name="job" value={job} onChange={setJob} />
    </>
  );
}
export default Component;
