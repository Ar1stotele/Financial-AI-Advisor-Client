import toast from 'react-hot-toast';
import { useCallback, useState } from 'react';
import { TabWrapper, SubmitBtn, UserInput } from '../../../ui';
import { registerUser } from '../../../../api/registerUser';

interface RegistrationProps {
  goBackHandler: () => void;
}

export const Registration = ({ goBackHandler }: RegistrationProps) => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const setUserEmailHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserEmail(event.target.value);
    },
    []
  );

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

  const registerHandler = useCallback(async () => {
    if (
      userName.trim().length === 0 ||
      userEmail.trim().length === 0 ||
      userPassword.trim().length === 0
    ) {
      toast.error('Something went wrong', { duration: 5000 });
      return undefined;
    }

    const requestObject = {
      userName: userName,
      email: userEmail,
      password: userPassword,
    };

    const response = await registerUser(requestObject);
    if (response.status) {
      toast.success('You have successfully registered, now you can log in');
    } else {
      toast.error('Something went wrong. Please, try again');
    }
  }, [userEmail, userName, userPassword]);

  return (
    <TabWrapper goBackHandler={goBackHandler} wrapperClassName="gap-y-6">
      <h1 className="text-xl sm:text-2xl text-black font-bold">Register</h1>
      <UserInput
        value={userName}
        onChangeHandler={setUserNamelHandler}
        placeholder="Please enter username"
      />
      <UserInput
        onChangeHandler={setUserEmailHandler}
        placeholder="Please enter email"
        type="email"
        value={userEmail}
      />
      <UserInput
        onChangeHandler={setUserPasswordHandler}
        placeholder="Please enter password"
        type="password"
        value={userPassword}
      />
      <SubmitBtn btnName="Register" btnAction={registerHandler} />
    </TabWrapper>
  );
};
