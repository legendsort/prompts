import Image from 'next/image';
import Link from 'next/link';
import { OTHER_LINKS, SOCIAL_LINKS } from '@/helpers/constants';

export default function Footer() {
  return (
    <footer className="flex flex-col bg-[#222236] bg-[url('/footer.png')] bg-no-repeat bg-cover">
      <div className="flex flex-col items-center py-9 border-b border-b-[#FFFFFF66]">
        <Image className="mb-3" src="/logo150.png" alt="logo" width="150" height="150" />

        <div className="flex mb-5">
          {OTHER_LINKS.map(({ title, href }) => (
            <Link key={title} className="mr-3 last:mr-0" href={href}>
              {title}
            </Link>
          ))}
        </div>

        <div className="flex items-center px-9">
          {SOCIAL_LINKS.map(({ type, icon, href }) => (
            <Link key={type} className="mr-7 last:mr-0" href={href}>
              <Image src={icon} alt={type} width="30" height="30" />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center py-4">
        <span>© Prompts 2023</span>
      </div>
    </footer>
  );
}
