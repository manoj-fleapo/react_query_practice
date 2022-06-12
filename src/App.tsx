import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home';
import UsersList from "./Pages/UsersList"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import UserDetails from './Pages/UserDetails';
function App() {

  return (

    <div className="App">

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/react-query">react query</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-query" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>

    </div>


  );
}

export default App;
