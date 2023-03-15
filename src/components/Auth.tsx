import { useEffect, useState } from 'react';
import UserService from '@/supabase/User';
import { useRouter } from 'next/router';

export default function Auth({ children }: { children: JSX.Element }) {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await UserService.get_session();

      if (!session) {
        router.push({
          pathname: '/login',
          query: {
            redirectUrl: router.pathname,
          },
        });
      } else {
        setIsAuth(true);
      }
    };

    checkAuth();
  }, []);

  if (isAuth) {
    return children;
  }

  return <div>Loading....</div>;
}
