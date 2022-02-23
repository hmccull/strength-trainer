import React from "react";
// import { Routes, Route } from "react-router-dom";

import NavigationBar from './NavigationBar';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function Home({ user, setUser }) {
     return (
         <div>
             <div>
                <NavigationBar user={user} setUser={setUser} />
             </div>
             <div id='login-container'>
                <LoginForm setUser={setUser}/>
             </div>                
         </div>
     )
}

export default Home;