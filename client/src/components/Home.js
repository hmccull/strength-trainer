import React, { useState } from "react";
import { Button } from 'reactstrap';
import FadeIn from 'react-fade-in';

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Home({ user, setUser }) {
   const [isToggled, setIsToggled] = useState(false);

   function handleClick() {
      setIsToggled(!isToggled);
   }

     return (
         <div id="hero-img">

               <h1 id="home-header">Welcome to Strength Trainer</h1>

               <div id='forms-container'>
                  <FadeIn delay={100} transitionDuration={1000}>
                     <div id='login-form'>
                        {!isToggled ? <LoginForm user={user} setUser={setUser} /> : <SignupForm user={user} setUser={setUser} />}
                     </div>

                     <div id='no-account-container'>
                        <div className='divider-home'>
                           <hr />
                        </div>
                        <h2 className="login-signup-header">{!isToggled ? 'No account?' : 'Already signed up?'}</h2>
                        <Button onClick={handleClick}>{!isToggled ? 'Sign up' : 'Login'}</Button> 
                     </div>
                  </FadeIn>
               </div>

         </div>
     )
}

export default Home;