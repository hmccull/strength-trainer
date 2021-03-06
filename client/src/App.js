import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

// import Loading from './components/Loading';

import NavigationBar from './components/NavigationBar';
import Home from './components/Home';

import Dashboard from './components/Dashboard';
import AddWorkout from './components/AddWorkout';
import AddCoreLift from './components/AddCoreLift';
import AddAssistance from './components/AddAssistance';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div id="app">
      <NavigationBar user={user} setUser={setUser} />
        <Routes>

            <Route exact path={"/me/workout/new/:id/core"} element={<AddCoreLift user={user} />} />

            <Route exact path={"/me/workout/new/:id/assistance"} element={<AddAssistance user={user} />} />

            <Route exact path={"/new"} element={<AddWorkout user={user} />} />

            <Route exact path={"/me"} element={<Dashboard user={user} setUser={setUser} />} />

            <Route exact path={"/"} element={<Home user={user} setUser={setUser} />} />

        </Routes>
    </div>
  );
}

export default App;
