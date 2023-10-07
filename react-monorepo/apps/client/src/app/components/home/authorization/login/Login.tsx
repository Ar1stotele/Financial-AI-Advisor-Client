import toast from 'react-hot-toast';
import { useState, useCallback } from 'react';
import { UserInput, SubmitBtn, TabWrapper } from '../../../ui';
import { useNavigate } from 'react-router';

interface LoginProps {
  goBackHandler: () => void;
}

export const Login = ({ goBackHandler }: LoginProps) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const setUserNamelHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(event.target.value);
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
    if (userName.trim().length === 0 || userPassword.trim().length === 0) {
      toast.error('Something went wrong', { duration: 5000 });
      return undefined;
    }

    navigate('/events');

    console.log('TODO --> REGISTER USER');
  }, [userName, userPassword]);

  return (
    <TabWrapper goBackHandler={goBackHandler} wrapperClassName="gap-y-6">
      <h1 className="text-xl sm:text-2xl text-black font-bold">Login</h1>
      <UserInput
        value={userName}
        onChangeHandler={setUserNamelHandler}
        placeholder="Please enter username"
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
