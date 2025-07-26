import styled from 'styled-components';

export const AppContainer = styled.div`
  position: relative;
  height: calc(100vh - 10px);
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

export const BingoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 1000px;
  max-height: calc(100vh - 50px);
  margin-left: auto;
  margin-right: auto;
  display: grid;
  padding: 5px;
  grid-template-columns:
    minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)
    minmax(0, 1fr);
  grid-template-rows:
    44px minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)
    minmax(0, 1fr);
  grid-row-gap: 5px;
  grid-column-gap: 5px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderSquare = styled.div`
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.font.family};
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 44px;
  padding: 0;
`;
