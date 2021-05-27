import React, { useState, useEffect } from "react";

const ControlForm = (initialFieldValues, validate, setCurrentId) => {
  const [inputVal, setInputVal] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    const fieldValue = { [name]: value };
    setInputVal({
      ...inputVal,
      ...fieldValue,
    });
    validate(fieldValue);
  };

  const resetForm = () => {
    setInputVal({
      ...initialFieldValues,
    });
    setErrors({});
    setCurrentId(0);
  };

  return {
    inputVal,
    setInputVal,
    errors,
    setErrors,
    inputChangeHandler,
    resetForm,
  };
};

export default ControlForm;
