import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="grow">{children}</div>

      <Footer />
    </div>
  );
}
