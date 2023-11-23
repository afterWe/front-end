import React, { useState } from 'react';
import { StarOutlineIcon, StarIcon } from '@class101/ui';

const Rate = () => {
  const [selectedStars, setSelectedStars] = useState(0);
  const [clickStars, setClickStars] = useState(0);

  const handleStarHover = (value: any) => {
    setSelectedStars(value);
  };

  const handleStarClick = (value: any) => {
    setClickStars(value);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map(value => (
        <span
          key={value}
          onMouseEnter={() => handleStarHover(value)}
          onMouseLeave={() => handleStarHover(clickStars)}
          onClick={() => handleStarClick(value)}
          style={{ cursor: 'pointer' }}
        >
          {selectedStars >= value ? <StarIcon /> : <StarOutlineIcon />}
        </span>
      ))}
    </div>
  );
};

export default Rate;
