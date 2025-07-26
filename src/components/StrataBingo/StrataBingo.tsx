import React, { useState, useEffect } from 'react';
import Bingo from '../Bingo';
import strata_squares from '../../utils/squares.strata';
import { getSquares } from '../../utils/squares.util';

const StrataBingo: React.FC = () => {
  const [squares, setSquares] = useState<string[]>([]);

  useEffect(() => {
    setSquares(getSquares(strata_squares));
  }, []);

  return <Bingo squares={squares} freeSpace="" />;
};

export default StrataBingo;
