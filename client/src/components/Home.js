import React from "react";
// import { Routes, Route } from "react-router-dom";

import NavigationBar from './NavigationBar';
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';
import AddWorkout from "./AddWorkout";

function Home({ user, setUser }) {
     return (
         <div>
             <div>
                <NavigationBar user={user} setUser={setUser} />
             </div>
             <AddWorkout user={user} />     
         </div>
     )
}

export default Home;