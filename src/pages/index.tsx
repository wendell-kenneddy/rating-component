import Head from 'next/head';
import { RatingSubmitted } from '../components/RatingSubmitted';
import { SelectRating } from '../components/SelectRating';
import { useRating } from '../hooks';

export default function Home() {
  const { hasSubmitted } = useRating();

  return (
    <>
      <Head>
        <meta name="description" content="A simple rating component" />
        <meta name="author" content="Wendell Kenneddy" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rating Component" />
        <meta property="og:site_name" content="Rating Component" />
        <meta property="og:description" content="A simple rating component." />
        <meta property="og:url" content="https://ratingcomponent.vercel.app/" />
        <meta property="og:locale" content="en-US" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Rating Component" />
        <meta
          property="twitter:description"
          content="A simple rating component."
        />
        <meta
          property="twitter:url"
          content="https://ratingcomponent.vercel.app/"
        />
        <title>Rating Component</title>
        <link rel="canonical" href="https://ratingcomponent.vercel.app/" />
      </Head>

      <main className="bg-brand-dark-blue rounded-2xl p-8 w-[90vw] max-w-[380px]">
        {hasSubmitted ? <RatingSubmitted /> : <SelectRating />}
      </main>
    </>
  );
}
