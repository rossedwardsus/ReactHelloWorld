import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';

import ReactHookFormScreen from './ReactHookFormScreen';
import RTKScreen from './RTKScreen';

import { store } from './RTKStore';
import { Provider } from 'react-redux';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Link to="/app">{"user.name"}</Link><Link to="/reacthookform">{"reacthookform"}</Link><Link to="/rtk">{"rtk"}</Link>Hello world!</div>,
  },
  {
    path: "/app",
    element: <App/>
  },
  {
    path: "/reacthookform",
    element: <ReactHookFormScreen/>
  },
  {
    path: "/rtk",
    element: <RTKScreen/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
  </React.StrictMode>
);
