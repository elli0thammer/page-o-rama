import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select value={value} onChange={event => onChange(event.target.value)}>
      <option value="" disabled>{defaultValue}</option>
      {
        options.map(el => <option key={el.value} value={el.value}>{el.name}</option>)
      }
    </select>
  );
};

export default MySelect;
