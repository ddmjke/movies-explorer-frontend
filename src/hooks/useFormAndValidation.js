import { useState, useCallback } from "react";
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
export default function useFormAndValidation(args) {
  const [ values, setValues ] = useState(args || {});
  const [ errors, setErrors ] = useState({});
  const [ isValid, setIsValid ] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]: value });
    if (name ==='email' && !emailRegex.test(value)) {
      setErrors({...errors, 'email': 'email is not valid'});
      setIsValid(false);
    } else {
      setErrors({...errors, [name]: e.target.validationMessage});
      setIsValid(e.target.closest('form').checkValidity());
    }
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return {values, handleChange, errors, isValid, resetForm, setValues, setIsValid}
}