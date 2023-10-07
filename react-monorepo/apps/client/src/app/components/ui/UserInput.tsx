import React from 'react';

interface UserInputProps<T> {
  id?: string;
  type?: string;
  placeholder?: string;
  inputClassName?: string;
  value: T;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserInput: React.FC<UserInputProps<any>> = ({
  inputClassName,
  value,
  onChangeHandler,
  placeholder = '',
  id = '',
  type = 'text',
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-1/4 px-4 py-2 text-base outline-none bg-hk-purple-10 text-center text-hk-purple-300 placeholder:text-center placeholder:text-hk-purple-100
      border-[1px] border-[#111] rounded-md focus:ring-blue-100 focus:ring-2 ${inputClassName}`}
      onChange={onChangeHandler}
      id={id}
      value={value}
      autoComplete="off"
    />
  );
};
