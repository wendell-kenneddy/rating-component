import { ArrowLeft } from 'phosphor-react';
import { useRating } from '../../hooks/useRating';

export function RestartRatingButton() {
  const { handleRestartRating } = useRating();

  return (
    <button
      className="text-brand-orange p-2 rounded-full mt-4 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-brand-dark-blue"
      type="button"
      name="Submit another rating"
      onClick={handleRestartRating}
    >
      <ArrowLeft size={32} />
    </button>
  );
}
