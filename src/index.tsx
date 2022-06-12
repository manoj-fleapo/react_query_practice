import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./storage"
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const client = new QueryClient()
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>


  </React.StrictMode>
);

reportWebVitals();
