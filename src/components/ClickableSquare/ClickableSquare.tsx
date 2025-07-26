import React, { type PropsWithChildren, useCallback } from 'react';
import { Clickable } from './ClickableSquare.styles';

interface ClickableSquareProps {
  clicked: boolean;
  clickable?: boolean;
  index: number;
  onClick: (index: number) => void;
  className?: string;
}

const ClickableSquare: React.FC<PropsWithChildren<ClickableSquareProps>> = ({
  clicked,
  clickable = true,
  index,
  onClick,
  className,
  children,
}) => {
  const click = useCallback(() => {
    onClick(index);
  }, [index, onClick]);

  return (
    <Clickable
      className={className}
      onClick={click}
      $clicked={clicked}
      $clickable={clickable}
    >
      {children}
    </Clickable>
  );
};

export default ClickableSquare;
