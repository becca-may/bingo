export const theme = {
  colors: {
    primary: '#a8ff01',
    secondary: '#2ecc71',
    background: '#292929',
    fontColorOnPrimary: '#292929',
    fontColorOnBackground: '#fff',
  },
  font: {
    family: `'Roboto', Arial, Helvetica, sans-serif`,
  },
};

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
