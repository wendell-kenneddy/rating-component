import Image from 'next/image';
import { RatingDisplay } from '../RatingDisplay';
import { RestartRatingButton } from '../RestartRatingButton';

export function RatingSubmitted() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Image
        src="/illustration-thank-you.svg"
        alt="Thank you image"
        width={162}
        height={108}
      />

      <RatingDisplay />

      <p className="text-brand-white text-2xl font-bold mt-4">Thank you!</p>

      <p className="text-brand-light-grey text-sm text-center mt-3">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don{"'"}t hesitate to get in touch!
      </p>

      <RestartRatingButton />
    </div>
  );
}
