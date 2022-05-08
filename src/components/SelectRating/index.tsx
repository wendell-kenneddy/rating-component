import { RatingButton } from '../RatingButton';
import { Star } from '../Star';
import { SubmitRatingButton } from '../SubmitRatingButton';

export function SelectRating() {
  return (
    <div className="h-full w-full flex flex-col items-start">
      <Star />

      <h1 className="font-bold text-brand-white text-2xl">How did we do?</h1>

      <p className="text-sm mt-3 text-left text-brand-light-grey">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our oferring!
      </p>

      <div className="w-full flex items-center justify-between mt-4 mb-5">
        <RatingButton rating={1} />
        <RatingButton rating={2} />
        <RatingButton rating={3} />
        <RatingButton rating={4} />
        <RatingButton rating={5} />
      </div>

      <SubmitRatingButton />
    </div>
  );
}
