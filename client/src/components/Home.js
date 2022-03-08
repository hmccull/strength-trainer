import React, { useState } from "react";
import { Button } from 'reactstrap';

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Home({ user, setUser }) {
   const [isToggled, setIsToggled] = useState(false);

   function handleClick() {
      setIsToggled(!isToggled);
   }

     return (
         <div id="hero-img">
            <div id='home'>
             <div id='login-form'>
                {!isToggled ? <LoginForm user={user} setUser={setUser} /> : <SignupForm user={user} setUser={setUser} />}
             </div>

             <div id='no-account'>
             <div className='divider-home'>
                <hr />
             </div>
                <h2>{!isToggled ? 'No account?' : 'Already signed up?'}</h2>
                <Button onClick={handleClick}>{!isToggled ? 'Sign up' : 'Login'}</Button> 
             </div>

            </div>
         </div>
     )
}

export default Home;