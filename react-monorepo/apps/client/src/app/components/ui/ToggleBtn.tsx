import { Dispatch } from 'react';

interface ToggleBtnProps<T> {
  toggleOptions: T;
  selectedOption: T;
  setSelectedOption: Dispatch<T>;
  wrapperStyles?: string;
}

export const ToggleBtn: React.FC<ToggleBtnProps<any>> = ({
  toggleOptions,
  selectedOption,
  setSelectedOption,
  wrapperStyles,
}) => {
  const toggleOptionsValues = Object.values(toggleOptions);

  return (
    <div
      className={`flex items-center bg-green-100 rounded-lg px-4 py-2 text-xl gap-x-10 ${wrapperStyles}`}
    >
      {toggleOptionsValues &&
        toggleOptionsValues.map((value: any) => {
          return (
            <button
              key={value}
              onClick={() => {
                setSelectedOption(value);
              }}
              className={`hover:text-red-500 ${
                selectedOption === value ? 'text-red-500' : 'text-black'
              }`}
            >
              {value}
            </button>
          );
        })}
    </div>
  );
};
