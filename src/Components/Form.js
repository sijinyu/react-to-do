import React from'react';
import './Form.css';

const Form = ({value,onChange,onCreate, onKeyPreass}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPreass={onKeyPreass}/>
      <div className="create-button" onClick={onCreate}>
        추가
        </div>
        </div>
  );
};
export default Form;
