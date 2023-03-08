import Image from 'next/image';
import Link from 'next/link';
import { SOCIAL_LINKS, ROUTE_MAP } from '@/helpers/constants';

export default function Header() {
  return (
    <header className="flex h-[80px] border-b-[0.5px] border-[#FFFFFF66]">
      <div className="flex items-center px-12 border-r-[0.5px] border-[#FFFFFF66]">
        <Image className="mr-3" src="/logo.png" alt="logo" width="54" height="54" />
        <Image src="/title.svg" alt="prompts" width="110" height="25" />
      </div>

      <div className="grow flex items-center px-5 border-r-[0.5px] border-[#FFFFFF66]">
        <div className="container flex items-center mx-auto">
          <div className="grow flex items-center px-4 py-3 mr-9 border-[0.5px] border-[#FFFFFF99] rounded-full">
            <input
              className="grow bg-transparent outline-none placeholder:text-white placeholder:text-sm placeholder:leading-4"
              type="text"
              placeholder="Search Prompts..."
            />
            <Image src="/search.svg" alt="search" width="20" height="20" />
          </div>

          <nav className="flex opacity-70">
            {ROUTE_MAP.map(({ title, href, icon }) => (
              <Link key={title} className="flex items-center mr-6 last:mr-0" href={href}>
                {title}
                {icon && <Image className="ml-1" src={icon} alt={title} width="8" height="8" />}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex items-center px-9">
        {SOCIAL_LINKS.map(({ type, icon, href }) => (
          <Link key={type} className="mr-7 last:mr-0" href={href}>
            <Image src={icon} alt={type} width="30" height="30" />
          </Link>
        ))}
      </div>
    </header>
  );
}
