import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

// import Loading from './components/Loading';

import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import SignupForm from './components/SignupForm';

import Dashboard from './components/Dashboard';
import AddWorkout from './components/AddWorkout';


function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="app">
      <NavigationBar user={user} setUser={setUser} />
        <Routes>

            <Route exact path={"/signup"} element={<SignupForm user={user} setUser={setUser} />} />

            <Route exact path={"/new"} element={<AddWorkout user={user} />} />

            <Route exact path={"/me"} element={<Dashboard user={user} setUser={setUser} />} />

            <Route exact path={"/"} element={<Home user={user} setUser={setUser} />} />

        </Routes>
    </div>
  );
}

export default App;
