import React, { useState, useEffect, useCallback } from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import { BingoWrapper, HeaderSquare, AppContainer } from './Bingo.styles';
import ClickableSquare from '../ClickableSquare';
import { getSquares } from '../../utils/squares';
import { BINGO_PATTERNS } from '../../utils/constants';

const Main: React.FC = () => {
  const [squares, setSquares] = useState<string[]>([]);
  const [clickedSquares, setClickedSquares] = useState<number[]>([12]);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setSquares(getSquares);
    setClickedSquares([12]);
  }, []);

  const squareClicked = useCallback(
    (i: number) => {
      setClickedSquares(toggleSquareClicked(i, clickedSquares));
    },
    [clickedSquares],
  );

  return (
    <AppContainer>
      {isBingo(clickedSquares) && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={30}
          opacity={0.7}
          colors={[
            '#f44336',
            '#e91e63',
            '#9c27b0',
            '#673ab7',
            '#3f51b5',
            '#2196f3',
            '#03a9f4',
            '#00bcd4',
            '#009688',
            '#4CAF50',
            '#8BC34A',
            '#CDDC39',
            '#FFEB3B',
            '#FFC107',
            '#FF9800',
            '#FF5722',
            '#795548',
          ]}
          drawShape={(ctx) => {
            ctx.beginPath();
            ctx.arc(150, 100, 25, 0, 2 * Math.PI, false);
            //ctx.fillStyle = 'red';
            ctx.fill();
            ctx.lineWidth = 1;
            //ctx.strokeStyle = 'red';
            //ctx.stroke();

            ctx.beginPath();
            ctx.arc(200, 100, 25, 0, 2 * Math.PI, false);
            //ctx.fillStyle = 'red';
            ctx.fill();
            ctx.lineWidth = 1;
            //ctx.strokeStyle = 'red';
            //ctx.stroke();

            ctx.beginPath();
            ctx.scale(1, 2);
            ctx.arc(175, 26, 25, 0, 2 * Math.PI, false);
            //ctx.restore();
            //ctx.fillStyle = 'red';
            ctx.fill();
            ctx.lineWidth = 1;
            //ctx.strokeStyle = 'red';
            //ctx.stroke();
          }}
        />
      )}
      <BingoWrapper>
        <HeaderSquare>B</HeaderSquare>
        <HeaderSquare>I</HeaderSquare>
        <HeaderSquare>N</HeaderSquare>
        <HeaderSquare>G</HeaderSquare>
        <HeaderSquare>O</HeaderSquare>
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

        <ClickableSquare index={0} clicked={true} onClick={squareClicked}>
          Chris is out of mana (FREE SPACE)
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
