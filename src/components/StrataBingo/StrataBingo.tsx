import React, { useState, useEffect } from 'react';
import Bingo from '../Bingo';
import strata_squares from '../../utils/squares.strata';
import { getSquares } from '../../utils/squares.util';
import { ThemeProvider } from 'styled-components';
import { theme } from './StrataBingo.styles';

const StrataBingo: React.FC = () => {
  const [squares, setSquares] = useState<string[]>([]);

  useEffect(() => {
    setSquares(getSquares(strata_squares));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Bingo squares={squares} freeSpace="" confettiEmoji="🍰" />
    </ThemeProvider>
  );
};

export default StrataBingo;
