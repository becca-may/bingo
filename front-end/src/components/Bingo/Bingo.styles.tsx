import styled from 'styled-components';
import { BRIGHT_GREEN, DARK_GREY } from '../../utils/constants';

export const AppContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: ${DARK_GREY};
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

export const BingoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 1000px;
  max-height: calc(100vh - 44px);
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns:
    minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)
    minmax(0, 1fr);
  grid-template-rows:
    44px minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)
    minmax(0, 1fr);
  border: 2px solid ${BRIGHT_GREEN};
  border-radius: 4px;
  background-color: ${DARK_GREY};
`;

export const HeaderSquare = styled.div`
  position: relative;
  width: 100%;
  color: ${BRIGHT_GREEN};
  background-color: ${DARK_GREY};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 44px;
  padding: 0;
`;
