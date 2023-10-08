import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from './app/store/GlobalStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </BrowserRouter>
  </StrictMode>
);
