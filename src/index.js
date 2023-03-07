import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './components/ContextProvider/Context';
import { BrowserRouter } from "react-router-dom"
import { createRoot } from "react-dom/client";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";
import { interceptor } from './components/intercept';


const muiTheme = createTheme();
 const intercept = interceptor();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
     <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
  </Context>

);

