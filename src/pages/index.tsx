import Head from 'next/head';
import Image from 'next/image';
import { FEATURED_MAP } from '@/helpers/constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>Prompts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col items-center mb-36">
          <h2 className="mb-9">Featured In</h2>

          <div className="flex flex-wrap max-w-[1005px] gap-y-8 -mr-20">
            {FEATURED_MAP.map(({ title, image, width, height }) => (
              <Image key={title} className="mr-20 last:mr-0" src={image} alt={title} width={width} height={height} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
