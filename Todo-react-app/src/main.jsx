import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import ContextProvider from './Store/ContextProvider.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"//css
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"//js
import store from './Store/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ContextProvider>
          <App />
        </ContextProvider></Provider>
    </BrowserRouter>
  </React.StrictMode>
);
