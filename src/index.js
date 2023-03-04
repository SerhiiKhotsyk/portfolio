import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LangProvider } from './hoc/LangProvider/LangProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LangProvider>
    <App />
  </LangProvider>,
);
