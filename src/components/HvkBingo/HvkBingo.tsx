import React, { useState, useEffect } from 'react';
import Bingo from '../Bingo';
import hvk_squares from '../../utils/squares.hvk';
import { getSquares } from '../../utils/squares.util';
import { ThemeProvider } from 'styled-components';
import { theme } from './HvkBingo.styles';

const HvkBingo: React.FC = () => {
  const [squares, setSquares] = useState<string[]>([]);

  useEffect(() => {
    setSquares(getSquares(hvk_squares));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Bingo
        squares={squares}
        freeSpace="Chris is out of mana"
        confettiEmoji="🍆"
      />
    </ThemeProvider>
  );
};

export default HvkBingo;
