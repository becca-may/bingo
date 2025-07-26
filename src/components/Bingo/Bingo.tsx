import React, { useState, useEffect, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';

import { BingoWrapper, HeaderSquare, AppContainer } from './Bingo.styles';
import ClickableSquare from '../ClickableSquare';
import { BINGO_PATTERNS } from '../../utils/constants';

interface BingoProps {
  squares: string[];
  freeSpace: string;
  confettiEmoji: string;
  title?: string;
}

const Main: React.FC<BingoProps> = ({
  squares,
  freeSpace,
  title = 'bingo',
  confettiEmoji,
}) => {
  const [clickedSquares, setClickedSquares] = useState<number[]>([12]);
  const [hasBingo, setHasBingo] = useState(false);

  const confettiCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setClickedSquares([12]);
  }, []);

  useEffect(() => {
    const bingo = isBingo(clickedSquares);
    if (bingo && !hasBingo) {
      setHasBingo(true);
      // Fire confetti using the canvas
      confetti.create(confettiCanvasRef.current!, { resize: true })({
        particleCount: 120,
        spread: 400,
        origin: { y: 0.2 },
        shapes: [confetti.shapeFromText({ text: confettiEmoji, scalar: 10 })],
      });
    } else if (!bingo && hasBingo) {
      setHasBingo(false);
    }
  }, [clickedSquares, hasBingo]);

  const squareClicked = useCallback(
    (i: number) => {
      if (i == 12) return;
      setClickedSquares(toggleSquareClicked(i, clickedSquares));
    },
    [clickedSquares],
  );

  return (
    <AppContainer>
      <canvas
        ref={confettiCanvasRef}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
        }}
      />

      <BingoWrapper>
        <HeaderSquare>{title[0]}</HeaderSquare>
        <HeaderSquare>{title[1]}</HeaderSquare>
        <HeaderSquare>{title[2]}</HeaderSquare>
        <HeaderSquare>{title[3]}</HeaderSquare>
        <HeaderSquare>{title[4]}</HeaderSquare>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((x) => (
          <ClickableSquare
            key={x}
            index={x}
            clicked={squareIsClicked(x, clickedSquares)}
            onClick={squareClicked}
          >
            {squares[x]}
          </ClickableSquare>
        ))}

        <ClickableSquare
          index={12}
          clicked={true}
          onClick={squareClicked}
          clickable={false}
        >
          {freeSpace} (FREE SPACE)
        </ClickableSquare>

        {[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((x) => (
          <ClickableSquare
            key={x}
            index={x}
            clicked={squareIsClicked(x, clickedSquares)}
            onClick={squareClicked}
          >
            {squares[x]}
          </ClickableSquare>
        ))}
      </BingoWrapper>
    </AppContainer>
  );
};

export default Main;

function squareIsClicked(index: number, clickedSquares: number[]) {
  return clickedSquares.filter((x) => x == index).length > 0;
}

function toggleSquareClicked(index: number, clickedSquares: number[]) {
  if (squareIsClicked(index, clickedSquares)) {
    return [...clickedSquares.filter((x) => x != index)];
  }

  return [...clickedSquares.filter((x) => x != index), index];
}

function listContainsNumbers(pattern: number[], clicked: number[]) {
  for (let p of pattern) {
    if (clicked.filter((c) => c == p).length == 0) return false;
  }
  return true;
}

function isBingo(clickedSquares: number[]) {
  for (let pattern of BINGO_PATTERNS) {
    if (listContainsNumbers(pattern, clickedSquares)) {
      return true;
    }
  }
  return false;
}
