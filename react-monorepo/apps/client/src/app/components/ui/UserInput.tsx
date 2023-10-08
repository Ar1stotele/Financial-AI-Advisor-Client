import React from 'react';

interface UserInputProps<T> {
  id?: string;
  type?: string;
  placeholder?: string;
  inputClassName?: string;
  disabled?: boolean;
  value: T;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserInput: React.FC<UserInputProps<any>> = ({
  value,
  onChangeHandler,
  inputClassName,
  disabled = false,
  placeholder = '',
  id = '',
  type = 'text',
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-[35%] px-4 py-2 text-base outline-none bg-hk-purple-10 text-hk-purple-300 placeholder:text-hk-purple-100
      border-[1px] border-[#111] rounded-md focus:ring-blue-100 focus:ring-2 disabled:cursor-not-allowed ${inputClassName}`}
      onChange={onChangeHandler}
      id={id}
      value={value}
      autoComplete="off"
    />
  );
};
