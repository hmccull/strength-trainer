import React, { useState } from 'react';

function LoginForm({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(!isLoading);

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            setIsLoading(!isLoading);
            if (r.ok) {
                r.json().then((user) => setUser(user));
            } else {
                r.json().then((err) => {
                    console.log(err.errors)
                    setUsername("");
                    setPassword("");
                });
            }
        });
    }

    return(
        <div id='login'>
            Login
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

export default LoginForm;