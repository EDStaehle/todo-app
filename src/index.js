import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import AuthProvider, { AuthContext } from './context/Auth';
import SettingsProvider from './context/settings/setting';
import Login from './Components/Login_or_out/Login'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <SettingsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
    </AuthProvider>
  </React.StrictMode>
);
