export const theme = {
  colors: {
    primary: '#34eb83',
    secondary: '#2ecc71',
    background: '#edfff3',
    fontColorOnBackground: '#333',
    fontColorOnPrimary: '#333',
  },
  font: {
    family: `'Roboto', Arial, Helvetica, sans-serif`,
  },
};

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
