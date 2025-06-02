import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',  // Светло-синий
        },
        secondary: {
            main: '#f48fb1',  // Розоватый
        },
        background: {
            default: '#121212',  // Общий фон
            paper: '#1d1d1d',     // Цвет карточек, модалок
        },
    },
    typography: {
        fontFamily: `'Product Sans', sans-serif`,
    },
})