import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { FiltersProvider } from './contexts/FiltersContext.jsx';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext.jsx';
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
