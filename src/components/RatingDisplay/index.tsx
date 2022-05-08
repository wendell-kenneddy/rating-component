import { Rating } from '../../contexts/RatingContext';
import { useRating } from '../../hooks';

export function RatingDisplay() {
  const { currentRating } = useRating();
  const maxRating: Rating = 5;

  return (
    <div className="py-1 px-3 bg-brand-light-grey/10 flex items-center justify-center rounded-full my-4 text-brand-orange font-bold">
      <p className="text-sm">
        You selected {currentRating} out of {maxRating}
      </p>
    </div>
  );
}
