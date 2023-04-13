import React from 'react';

function Select({
  label = 'Sort by', className = '', onChange = () => {}, options = [],
}) {
  return (
    <div className={className}>
      <span>
        {label}
        :
      </span>
      <select onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}
      </select>
    </div>
  );
}
export default Select;
