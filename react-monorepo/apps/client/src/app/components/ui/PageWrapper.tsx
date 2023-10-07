import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="flex items-center justify-center flex-col text-xl sm:text-3xl font-semibold pt-10 w-full">
      {children}
    </div>
  );
};
