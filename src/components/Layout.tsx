import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="absolute opacity-10 left-0 top-0 w-full h-full bg-[url('/back.jpeg')]" />
      <div className="relative">
        <Header />
        <div className="grow">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
