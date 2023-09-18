import React from 'react';

const InputField = ({ label, type, placeholder, name, register, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} name={name} ref={register} />
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default InputField;
