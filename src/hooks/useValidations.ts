import React, { useState } from 'react';
import { Validations } from '../layouts/helpers/Validations'

const useValidations: React.FC = () => {
  const [err, setErr]= useState({});
  
  const[input, setInput]= useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    user_description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    
    setErr(Validations({ 
      ...input, 
      [name]: value 
    }))
  };

  return {
    input,
    handleChange,
    err
  }
};

export default useValidations;