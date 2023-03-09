import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FiltersProvider } from './contexts/FiltersContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </ShoppingCartProvider>
  </React.StrictMode>,
)
