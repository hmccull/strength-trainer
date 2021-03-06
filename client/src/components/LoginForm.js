import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function LoginForm({ user, setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    navigate("/me")
                });
            } else {
                r.json().then((err) => {
                    setErrors(err.errors)
                    setUsername("");
                    setPassword("");
                });
            }
        });
    }

    return(
        <div id='login'>
            <h2 className="login-signup-header">Login</h2>
            <div className='divider-form'>
                <hr />
            </div>
            <Form onSubmit={handleSubmit}>
                <FormGroup row>
                    <Label for="username">Username</Label>
                    <Col sm={3}>
                        <Input
                        type='text'
                        id='username'
                        placeholder='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="username">Password</Label>
                    <Col sm={3}>
                        <Input
                        type='password'
                        id='password'
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </Col>
                </FormGroup>
                <br />

                <FormGroup row>
                    <Col sm={{ size: 15 }}>
                        <Button>{!isLoading ? "Submit" : "Loading..."}</Button>
                    </Col>
                </FormGroup>
                <p>
                    {!!errors ? errors : null}
                </p>
            </Form>
            <br />
        </div>
    )
}

export default LoginForm;