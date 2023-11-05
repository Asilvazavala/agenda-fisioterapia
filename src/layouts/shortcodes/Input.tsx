import React from 'react';

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  autofocus?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  err: string | undefined;
}

const Input: React.FC<InputProps>= ({
  name='',
  label='',
  placeholder='',
  type='',
  autofocus=false,
  value='',
  onChange,
  err,
}) => {
  return (
    <article className="mb-5 lg:mb-7 flex flex-col items-start relative">
      <label htmlFor={name} className="form-label mb-0 dark:text-black">
        {label}
      </label>
      <input
        name={name}
        className='form-input px-2 w-56 bg-white border border-solid border-black dark:bg-white py-2 dark:text-black'
        placeholder={placeholder}
        type={type}
        autoFocus={autofocus}
        value={value}
        onChange={onChange}
      />
        <small className={err ? 'text-red-600 absolute mt-[4.2rem]' : ''}>
          {err  
            ? <span>{err}</span> 
            : null }
        </small>
    </article>
  )
};

export default Input;