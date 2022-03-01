import React from "react";
// import { Routes, Route } from "react-router-dom";
import { Button } from 'reactstrap';

// import SignupForm from './SignupForm';
import LoginForm from "./LoginForm";

function Home({ user, setUser }) {
     return (
         <div>
             <div>
                <LoginForm setUser={setUser} />
             </div>
             <div className='divider-home'>
                <hr />
             </div>
             <div>
                <h2>No account?</h2>
                <Button>Sign up</Button> 
             </div>
         </div>
     )
}

export default Home;