import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>

      <main className="w-[90vw] max-w-[400px] mx-auto flex flex-col items-center">
        <h1 className="text-brand-white font-bold text-2xl mb-8">
          Page not found <span className="text-brand-orange">:(</span>
        </h1>

        <Image
          src="/not-found.svg"
          alt="Woman searching illustration"
          height={200}
          width={240}
        />

        <Link href="/">
          <a className=" mt-8 text-brand-orange py-3 font-bold px-4 border-2 border-brand-orange rounded-full hover:bg-brand-orange/5 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange focus:ring-offset-brand-darker-blue">
            Go back to home
          </a>
        </Link>
      </main>
    </>
  );
}
