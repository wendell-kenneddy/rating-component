import Head from 'next/head';

export default function Offline() {
  return (
    <>
      <Head>
        <title>Offline at the moment</title>
      </Head>

      <main className="w-[90vw] max-w-[400px] mx-auto flex flex-col items-center">
        <h1 className="text-brand-white font-bold text-2xl mb-4">
          You are offline <span className="text-brand-orange">:(</span>
        </h1>

        <p className="text-brand-white">
          Check your connection or try again later
          <span className="text-brand-orange">.</span>
        </p>
      </main>
    </>
  );
}
