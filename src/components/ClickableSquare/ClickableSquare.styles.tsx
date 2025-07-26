import styled, { css } from 'styled-components';

type ClickableStyles = {
  $clicked?: boolean;
  $clickable?: boolean;
};

export const Clickable = styled.button<ClickableStyles>`
  padding: 5px;
  position: relative;
  //min-height: 100px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.family};
  font-weight: 500;
  background-color: ${(p) =>
    p.$clicked ? p.theme.colors.primary : p.theme.colors.background};
  color: ${(p) =>
    p.$clicked
      ? p.theme.colors.fontColorOnPrimary
      : p.theme.colors.fontColorOnBackground};
  border: 1px solid ${(p) => p.theme.colors.secondary};
  border-radius: 4px;
  transition:
    background-color 0.2s,
    color 0.2s,
    box-shadow 0.2s,
    transform 0.1s;
  text-overflow: ellipsis;
  overflow: hidden;

  ${({ $clickable, $clicked, theme }) =>
    $clickable &&
    css`
      &:hover {
        background-color: ${$clicked
          ? theme.colors.secondary
          : theme.colors.primary};
        color: ${$clicked ? theme.colors.background : theme.colors.background};
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        transform: translateY(-2px) scale(1.03);
      }

      &:active {
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.background};
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
        transform: translateY(1px) scale(0.98);
      }
    `}

  @media (max-width: 600px) {
    font-size: 11px;
  }
`;
