import { useContext } from 'react';
import { RatingContext } from '../contexts/RatingContext';

export function useRating() {
  const context = useContext(RatingContext);

  return context;
}
