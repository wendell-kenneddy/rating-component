import { Rating } from '../../contexts/RatingContext';
import { useRating } from '../../hooks';

interface RatingButtonProps {
  rating: Rating;
}

export function RatingButton({ rating }: RatingButtonProps) {
  const { currentRating, handleSelectRating } = useRating();
  const isSelected = rating === currentRating;

  return (
    <button
      className={`text-brand-med-grey w-10 h-10 rounded-full bg-brand-light-grey/10 flex items-center justify-center font-bold hover:bg-brand-light-grey hover:text-brand-white transition-colors ${
        isSelected
          ? 'text-brand-white bg-brand-orange/100 hover:bg-brand-orange/100'
          : ''
      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange focus:ring-offset-brand-dark-blue`}
      onClick={() => handleSelectRating(rating)}
    >
      {rating}
    </button>
  );
}
