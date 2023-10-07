import { useCallback, useState } from 'react';
import { Registration } from '../components/home/authorization/registration/Registration';
import { Login } from '../components/home/authorization/login/Login';
import { ChooseAuth } from '../components/home/ChooseAuth';
import { HomePageTabOption } from '../types';
import { PageWrapper } from '../components/ui';

export const HomePage = () => {
  const [authOption, setAuthOption] = useState(HomePageTabOption.None);

  const goBackHandler = useCallback(() => {
    setAuthOption(HomePageTabOption.None);
  }, []);

  return (
    <PageWrapper>
      <h1 className="">
        Welcome to the <span className="text-[#118ab2]">Event Creator App</span>
      </h1>
      {authOption === HomePageTabOption.None && (
        <ChooseAuth setAuthOption={setAuthOption} />
      )}
      {authOption === HomePageTabOption.Login && (
        <Login goBackHandler={goBackHandler} />
      )}
      {authOption === HomePageTabOption.Register && (
        <Registration goBackHandler={goBackHandler} />
      )}
    </PageWrapper>
  );
};
