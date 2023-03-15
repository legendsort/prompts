import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="relative">
      <div className="absolute opacity-10 left-0 top-0 w-full h-full bg-[url('/back.jpeg')] bg-cover bg-center bg-no-repeat" />
      <div className="relative flex flex-col min-h-screen">
        <Header />
        <div className="grow flex flex-col">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
