import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function SignupForm({ user, setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [gender, setGender] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true)

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
            setIsLoading(false)
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    navigate("/me")
                });
            } else {
                r.json().then((err) => {
                    setErrors(err.errors)
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
        <div id='signup'>
            <h2>Sign Up</h2>
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
                    <Label for="password">Password</Label>
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
                    <Label for="password_confirmation">Password Confirmation</Label>
                    <Col sm={3}>
                        <Input
                        type='password'
                        id='password_confirmation'
                        placeholder='password confirmation'
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
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
        </div>
    )
}

export default SignupForm;