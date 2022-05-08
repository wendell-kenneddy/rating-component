import type { AppProps } from 'next/app';
import { RatingContextProvider } from '../contexts/RatingContext';
import '../styles/reset.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RatingContextProvider>
      <Component {...pageProps} />
    </RatingContextProvider>
  );
}
