import styled from 'styled-components';
import { BRIGHT_GREEN, DARK_GREY } from '../../utils/constants';

type ClickableStyles = {
  $clicked?: boolean;
};

export const Clickable = styled.button<ClickableStyles>`
  padding: 5px;
  position: relative;
  min-height: 100px;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${(p) => (p.$clicked ? BRIGHT_GREEN : DARK_GREY)};
  color: ${(p) => (p.$clicked ? DARK_GREY : '#ffffff')};

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
