import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/theme';
import { TaskModalProvider } from './context/TaskModalContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
         <CssBaseline />
         <TaskModalProvider>
            <App />
         </TaskModalProvider>
      </ThemeProvider>
   </React.StrictMode>
);
