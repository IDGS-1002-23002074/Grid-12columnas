import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App.jsx';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#111111' },
    background: { default: '#f2f2f2', paper: '#ffffff' }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif'
  },
  shape: { borderRadius: 4 }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);