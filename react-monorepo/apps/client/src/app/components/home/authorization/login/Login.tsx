import { useNavigate } from 'react-router';
import { useState, useCallback } from 'react';
import toast from 'react-hot-toast';

import { UserInput, SubmitBtn, TabWrapper } from '../../../ui';

interface LoginProps {
  goBackHandler: () => void;
}

export const Login = ({ goBackHandler }: LoginProps) => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const setUserEmaillHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserEmail(event.target.value);
    },
    []
  );

  const setUserPasswordHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserPassword(event.target.value);
    },
    []
  );

  const registerHandler = useCallback(() => {
    if (userEmail.trim().length === 0 || userPassword.trim().length === 0) {
      toast.error('Something went wrong', { duration: 5000 });
      return undefined;
    }

    navigate('/events');

    console.log('TODO --> REGISTER USER');
  }, [navigate, userEmail, userPassword]);

  return (
    <TabWrapper goBackHandler={goBackHandler} wrapperClassName="gap-y-6">
      <h1 className="text-xl sm:text-2xl text-black font-bold">Login</h1>
      <UserInput
        value={userEmail}
        onChangeHandler={setUserEmaillHandler}
        placeholder="Please enter username"
        type="email"
      />
      <UserInput
        onChangeHandler={setUserPasswordHandler}
        placeholder="Please enter password"
        type="password"
        value={userPassword}
      />
      <SubmitBtn btnName="Login" btnAction={registerHandler} />
    </TabWrapper>
  );
};
