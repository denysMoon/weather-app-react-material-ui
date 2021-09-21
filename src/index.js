import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles'

import blue from '@material-ui/core/colors/blue';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: blue[200]
    }
  },
  typography: {
    poster: {
      color: 'green',
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);