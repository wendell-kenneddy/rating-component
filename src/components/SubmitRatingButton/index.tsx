import { useRating } from '../../hooks/useRating';

export function SubmitRatingButton() {
  const { handleRatingSubmit } = useRating();

  return (
    <button
      className="w-full py-[10px] bg-brand-orange text-brand-white rounded-full uppercase font-bold flex items-center justify-center text-[15px] hover:bg-brand-white hover:text-brand-orange transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange focus:ring-offset-brand-dark-blue"
      onClick={handleRatingSubmit}
    >
      Submit
    </button>
  );
}
