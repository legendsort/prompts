import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import Auth from '@/components/Auth';
import { ExtendedAppProps } from '@/helpers/interface';

export default function App({ Component, pageProps }: ExtendedAppProps) {
  return (
    <Layout>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </Layout>
  );
}
