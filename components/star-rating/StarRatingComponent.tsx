import React, { useMemo } from 'react';

const starStyle = {
  fontSize: '2rem',
  color: '#FFD700',
};

interface StarRatingProps {
  rating: number;
}

const getStarCount = (rating: number): number => {
  if (rating >= 9) return 5;
  if (rating >= 7) return 4;
  if (rating >= 5) return 3;
  if (rating >= 3) return 2;
  if (rating >= 1) return 1;
  return 0;
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const starCount = useMemo(() => getStarCount(rating), [rating]);

  const stars = useMemo(
    () =>
      Array.from({ length: 5 }, (_, index) => (index < starCount ? '★' : '☆')),
    [starCount],
  );

  return (
    <div>
      {stars.map((star, index) => (
        <span key={index} style={starStyle}>
          {star}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
