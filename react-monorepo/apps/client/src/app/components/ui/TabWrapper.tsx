import { ReactNode } from 'react';

interface TabWrapperProps {
  children: ReactNode;
  wrapperClassName?: string;
  goBackHandler?: () => void;
}

export const TabWrapper = ({
  children,
  wrapperClassName,
  goBackHandler,
}: TabWrapperProps) => (
  <div
    className={`relative bg-white shadow-2xl w-4/5 flex justify-center items-center flex-col rounded-md py-20 mt-10 ${wrapperClassName}`}
  >
    {goBackHandler && (
      <button onClick={goBackHandler}>
        <i className="absolute left-5 top-[100px] hover:text-blue-500 cursor-pointer bi bi-arrow-left" />
      </button>
    )}
    {children}
  </div>
);
