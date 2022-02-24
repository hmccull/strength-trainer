import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

function SignupForm({ user, setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [gender, setGender] = useState("");
    const [errors, setErrors] = useState([]);
    // const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                username, 
                password,
                password_confirmation: passwordConfirmation,
                gender, 
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    // history.push("/me")
                });
            } else {
                r.json().then((err) => {
                    console.log(err.errors)
                });
            }
        });
        setUsername("");
        setPassword("");
        setPasswordConfirmation("");
        setGender("");
    }

    console.log(gender)

    return(
        <div id='login'>
            Signup
            <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  id='username'
                  placeholder='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                  type='password'
                  id='password'
                  placeholder='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input
                  type='password'
                  id='password_confirmation'
                  placeholder='password confirmation'
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <br />
                <input
                  type='text'
                  id='gender'
                  placeholder='gender'
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
                <br />
                <input 
                  type='submit'
                  value="Submit"
                />
                <p>
                    {!!errors ? errors : null}
                </p>
            </form>
        </div>
    )
}

export default SignupForm;