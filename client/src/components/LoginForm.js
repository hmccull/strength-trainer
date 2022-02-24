import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Loading from './Loading';

function LoginForm({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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
                });
            } else {
                r.json().then((err) => {
                    setErrors(err.errors)
                });
            }
        });
        setUsername("");
        setPassword("");
    }

    return(
        <div id='login'>
            <Form onSubmit={handleSubmit}>
            <FormGroup row>
                <Label for="username" sm={1}>Username</Label>
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
                <Label for="username" sm={1}>Password</Label>
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
            <FormGroup row>
                <Col sm={{ size: 15 }}>
                    <Button>{!isLoading ? "Submit" : "Loading..."}</Button>
                </Col>
            </FormGroup>
                <p>
                    {!!errors ? errors : null}
                </p>
            </Form>
        </div>
    )
}

export default LoginForm;