import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider, ThemeConfig } from 'antd';
import { BrowserRouter } from 'react-router-dom';

const config: ThemeConfig = {
  token: {
    fontFamily: 'Poppins',
  },
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <ConfigProvider theme={config}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
