import React from "react";
import { Button } from 'reactstrap';

import LoginForm from "./LoginForm";

function Home({ user, setUser }) {

     return (
         <div id='home'>
             <div id='login-form'>
                <LoginForm user={user} setUser={setUser} />
             </div>

             <div id='no-account'>
             <div className='divider-home'>
                <hr />
             </div>
                <h2>No account?</h2>
                <Button href='/signup'>Sign up</Button> 
             </div>
         </div>
     )
}

export default Home;