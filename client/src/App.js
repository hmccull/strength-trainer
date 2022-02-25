import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './components/Home';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Loading from './components/Loading';

import './App.css';
import AddWorkout from './components/AddWorkout';


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

            <Route path={"/login"} element={<LoginForm user={user} setUser={setUser} />} />

            <Route exact path={"/signup"} element={<SignupForm user={user} setUser={setUser} />} />

            <Route path={"/new"} element={<AddWorkout user={user} />} />

            {/* <Route path={"/me"} render={<Dashboard />} /> */}

        </Routes>
    </div>
  );
}

export default App;
