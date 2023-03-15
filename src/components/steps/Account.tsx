import { useState, useEffect } from 'react';
import Image from 'next/image';
import LoginForm from '../LoginForm';

const Account = ({ onSuccess }: { onSuccess: () => void }) => {
  const [isLogin, setIsLogin] = useState(true);

  function handleChildData(data: boolean) {
    setIsLogin(data);
  }
  return (
    <div className="w-full flex flex-row gap-20 items-center">
      <div className="flex flex-col">
        <h3 className="pt-16 py-10 text-cener">{isLogin ? 'Sign In' : 'Create An Account'}</h3>
        <LoginForm onChildData={handleChildData} onSuccess={onSuccess} />
      </div>
      <Image src="/steps/account.png" alt="account" width="400" height="425" />
    </div>
  );
};

export default Account;
