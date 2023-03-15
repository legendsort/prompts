import Link from 'next/link';
import { useForm } from 'react-hook-form';
import clsx from 'classnames';
import { useState, useEffect } from 'react';
import Icon from '@/components/Icon';
import UserService from '../supabase/User';
import { useRouter } from 'next/router';

export type FormData = {
  username: string;
  email: string;
  password: string;
};
export interface LoginFormProps {
  onChildData: (data: boolean) => void;
  onSuccess?: () => void;
}

const LoginForm = ({ onChildData, onSuccess }: LoginFormProps) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const onSubmit = handleSubmit(async (data) => {
    try {
      if (isLogin) {
        UserService.sign_in(data).then((response) => {
          const { data, error } = response;
          if (onSuccess) {
            onSuccess();
            return;
          }
          if (error) throw 'Error in Login';
          if (router.query.redirectUrl) {
            router.push(router.query.redirectUrl as string);
          } else {
            router.push('/marketplace');
          }
        });
      } else {
        UserService.sign_up(data).then((response) => {
          const { data, error } = response;
          if (error) throw 'Error in Register';
          setIsLogin(true);
        });
      }
    } catch (e) {
      console.log('SOME ERROR HAPPENED', e);
    }
  });

  const signWithGoogle = (e: any) => {
    e.preventDefault();
    UserService.sign_in_google().then((response) => {
      const { data, error } = response;
      if (error) throw 'Error in Login';
      if (onSuccess) {
        onSuccess();
        return;
      }
      if (router.query.redirectUrl) {
        router.push(router.query.redirectUrl as string);
      } else {
        router.push('/marketplace');
      }
    });
  };

  useEffect(() => {
    onChildData(isLogin);
  }, [isLogin, onChildData]);

  return (
    <form
      className="flex flex-col w-full bg-[#FFFFFF1A] rounded-lg mb-40 min-w-[470px] max-w-[470px] mx-auto"
      onSubmit={onSubmit}
    >
      <div className="w-full justify-between items-center text-center flex flex-row border-b-[0.5px] border-[#FFFFFF66] mb-10">
        <div
          className={clsx('w-1/2 px-4 py-5 cursor-pointer', {
            'bg-green rounded-tl-lg text-black': isLogin === true,
          })}
          onClick={() => {
            setIsLogin(true);
          }}
        >
          Sing in
        </div>
        <div
          className={clsx('w-1/2 px-4 py-5 cursor-pointer', {
            'bg-green rounded-tr-lg text-black': isLogin === false,
          })}
          onClick={() => setIsLogin(false)}
        >
          Register
        </div>
      </div>
      <div className="px-8">
        {isLogin !== true && (
          <div className="flex flex-col gap-y-2">
            <label>Name</label>
            <input className="login-input mb-4 focus:outline-none focus:shadow-outline " {...register('username')} />
          </div>
        )}
        <div className="flex flex-col gap-y-2">
          <label>E-mail*</label>
          <input className="login-input mb-4 focus:outline-none focus:shadow-outline " {...register('email')} />
        </div>
        <div className="flex flex-col gap-y-2">
          <label>Password</label>
          <input
            className="login-input focus:outline-none focus:shadow-outline"
            type="password"
            {...register('password')}
          />
        </div>
        {isLogin ? (
          <label className="text-sm">Forgot password?</label>
        ) : (
          <div className="flex gap-2 text-sm">
            <input type="checkbox"></input>
            <label>
              I agree with <span className="text-[#0B88D9]">Terms</span> and{' '}
              <span className="text-[#0B88D9]">Privacy</span>
            </label>
          </div>
        )}
        <button
          className="w-full bg-yellow hover:bg-green text-black font-bold py-3 px-4 rounded-full mt-10"
          type="submit"
        >
          {isLogin ? 'Log In' : 'Register'}
        </button>
        {isLogin ? (
          <label className="text-center justify-center text-sm flex pt-4">
            {"Don't have an account?"}
            <Link href={'/'} className="text-[#0B88D9]">
              &nbsp;Create account
            </Link>
          </label>
        ) : (
          <label className="text-center justify-center text-sm flex pt-4">
            Already have an account?
            <Link href={'/'} className="text-[#0B88D9]">
              &nbsp;Log in
            </Link>
          </label>
        )}
        <br />
        <label className="text-center justify-center text-sm flex py-2">OR</label>
        <button
          className="flex w-full bg-[#FFFFFF2A] hover:bg-green py-3 px-4 rounded-lg text-sm mb-8"
          type="submit"
          onClick={signWithGoogle}
        >
          <div className="flex flex-row gap-3 jutify-center items-center mx-auto">
            <Icon>google</Icon>
            <span>Continue with Google</span>
          </div>
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
