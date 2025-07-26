import React, { useState, useEffect } from 'react';
import Bingo from '../Bingo';
import { hvk_squares } from '../../utils/squares.hvk';
import { getSquares } from '../../utils/squares.util';

const HvkBingo: React.FC = () => {
  const [squares, setSquares] = useState<string[]>([]);

  useEffect(() => {
    setSquares(getSquares(hvk_squares));
  }, []);

  return <Bingo squares={squares} />;
};

export default HvkBingo;
