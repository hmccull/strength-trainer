import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './components/Home';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

import './App.css';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <LoginForm setUser={setUser} />

  return (
    <div className="App">
        <Home user={user} setUser={setUser} />
        <Routes>

            <Route path={"/signup"} render={<SignupForm user={user} setUser={setUser} />} />

            <Route path={"/login"} render={<LoginForm user={user} setUser={setUser} />} />

            {/* <Route path={"/me"} render={<Dashboard />} /> */}

        </Routes>
    </div>
  );
}

export default App;
