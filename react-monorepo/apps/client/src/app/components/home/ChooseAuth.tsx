import { Dispatch, useCallback } from 'react';
import { PageWrapper, SubmitBtn, TabWrapper } from '../ui';
import { HomePageTabOption } from '../../types';

interface ChooseAuthProps {
  setAuthOption: Dispatch<HomePageTabOption>;
}

export const ChooseAuth = ({ setAuthOption }: ChooseAuthProps) => {
  const chooseLoginHandler = useCallback(() => {
    setAuthOption(HomePageTabOption.Login);
  }, [setAuthOption]);

  const chooseRegisterHandler = useCallback(() => {
    setAuthOption(HomePageTabOption.Register);
  }, [setAuthOption]);

  return (
    <TabWrapper wrapperClassName="gap-y-6">
      <h1 className="text-xl sm:text-2xl text-black font-bold">
        Login or Register
      </h1>

      <SubmitBtn btnName="Login" btnAction={chooseLoginHandler} />
      <SubmitBtn btnName="Register" btnAction={chooseRegisterHandler} />
    </TabWrapper>
  );
};
