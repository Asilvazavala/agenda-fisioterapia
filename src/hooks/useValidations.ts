import { useState } from 'react';
import { Validations } from '../layouts/helpers/Validations'
import { ErrorObj } from '../types/index';

const useValidations = () => {
  const [err, setErr]= useState<ErrorObj>({
    user_name: '',
    user_email: '',
    user_phone: '',
    user_description: ''
  });
  
  const[input, setInput]= useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    user_description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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