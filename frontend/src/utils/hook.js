import { useState } from 'react';

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  function onChange(event){
    values[event.target.name] = event.target.value;
    setValues(values);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    callback();
  }

  return {
    onChange,
    onSubmit,
    values
  }
}