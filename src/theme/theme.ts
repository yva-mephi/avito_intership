import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
   palette: {
      mode: 'dark',
      primary: {
         main: '#90caf9',
      },
      secondary: {
         main: '#f48fb1',
      },
      background: {
         default: '#121212',
         paper: '#1d1d1d',
      },
   },
   typography: {
      fontFamily: `'Product Sans', sans-serif`,
   },
});
