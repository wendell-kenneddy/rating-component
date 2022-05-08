import { createContext, ReactNode, useState } from 'react';

export type Rating = 1 | 2 | 3 | 4 | 5;

interface RatingContextProps {
  currentRating: Rating | null;
  hasSubmitted: boolean;
  handleSelectRating: (rating: Rating) => void;
  handleRatingSubmit: () => void;
  handleRestartRating: () => void;
}

interface RatingContextProviderProps {
  children: ReactNode;
}

export const RatingContext = createContext({} as RatingContextProps);

export function RatingContextProvider({
  children
}: RatingContextProviderProps) {
  const [currentRating, setCurrentRating] = useState<Rating | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function handleSelectRating(rating: Rating) {
    setCurrentRating(rating);
  }

  function handleRatingSubmit() {
    currentRating && setHasSubmitted(true);
  }

  function handleRestartRating() {
    setCurrentRating(null);
    setHasSubmitted(false);
  }

  return (
    <RatingContext.Provider
      value={{
        currentRating,
        hasSubmitted,
        handleSelectRating,
        handleRatingSubmit,
        handleRestartRating
      }}
    >
      {children}
    </RatingContext.Provider>
  );
}
