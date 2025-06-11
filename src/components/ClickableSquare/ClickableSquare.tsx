import React, { type PropsWithChildren, useCallback } from 'react';
import { Clickable } from './ClickableSquare.styles';

interface ClickableSquareProps {
  clicked: boolean;
  index: number;
  onClick: (index: number) => void;
  className?: string;
}

const ClickableSquare: React.FC<PropsWithChildren<ClickableSquareProps>> = ({
  clicked,
  index,
  onClick,
  className,
  children,
}) => {
  const click = useCallback(() => {
    onClick(index);
  }, [index, onClick]);

  return (
    <Clickable className={className} onClick={click} $clicked={clicked}>
      {children}
    </Clickable>
  );
};

export default ClickableSquare;
