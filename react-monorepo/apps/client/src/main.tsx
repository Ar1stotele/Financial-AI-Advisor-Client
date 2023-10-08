import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from './app/store/GlobalStore';
import { WagmiConfig } from 'wagmi';
import { config } from './app/functions/wagmi/createClient';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <WagmiConfig config={config}>
      <BrowserRouter>
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
      </BrowserRouter>
    </WagmiConfig>
  </StrictMode>
);
