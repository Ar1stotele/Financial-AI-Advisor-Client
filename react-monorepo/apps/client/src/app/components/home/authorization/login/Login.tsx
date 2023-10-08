import { useNavigate } from 'react-router';
import { useState, useCallback } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

import { UserInput, SubmitBtn, TabWrapper } from '../../../ui';
import { loginUser } from '../../../../api/loginUser';
import Cookies from 'js-cookie';

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

  const registerHandler = useCallback(async () => {
    if (userEmail.trim().length === 0 || userPassword.trim().length === 0) {
      toast.error('Something went wrong', { duration: 5000 });
      return undefined;
    }
    const requestObject = {
      userName: 'dummy',
      email: userEmail,
      password: userPassword,
    };

    const response = await loginUser(requestObject);

    if (response.status) {
      toast.success('You have logged in');
      const token = response.payload.token;
      // Cookies.get('token');

      Cookies.set('cookie', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      console.log({ response });
    } else {
      toast.error('Something went wrong');
    }

    navigate('/events');
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
