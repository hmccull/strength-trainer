import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function AddWorkout({ user }) {
    const [name, setName] = useState("");
    const [duration, setDuration] = useState("");
    const [activeCalories, setActiveCalories] = useState("");
    const [bodyWeight, setBodyWeight] = useState("");
    const [date, setDate] = useState("");
    
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true)

        const newWorkout = { 
            name, 
            duration,
            active_calories: activeCalories,
            body_weight: bodyWeight,
            date, 
        };

        fetch("/workouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newWorkout),
        }).then((r) => {
            setIsLoading(false)
            if (r.ok) {
                r.json().then((newWorkout) => {
                    navigate("/me")
                });
            } else {
                r.json().then((err) => {
                    setErrors(err.errors)
                });
            }
        });
    }

    return(
        <div id='add-workout'>
            Add Workout
            <Form onSubmit={handleSubmit}>
                <FormGroup row>
                    <Label for="name" sm={1}>Name</Label>
                    <Col sm={3}>
                        <Input
                        type='text'
                        id='name'
                        placeholder='name this workout'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="duration" sm={1}>Duration</Label>
                    <Col sm={3}>
                        <Input
                        type='number'
                        id='duration'
                        placeholder='duration in minutes'
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="active_calories" sm={1}>Active Calories</Label>
                    <Col sm={3}>
                        <Input
                        type='number'
                        id='active_calories'
                        placeholder='estimated active calories burned'
                        value={activeCalories}
                        onChange={(e) => setActiveCalories(e.target.value)}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="body_weight" sm={1}>Body Weight</Label>
                    <Col sm={3}>
                        <Input
                        type='number'
                        id='body_weight'
                        placeholder='body weight in lbs.'
                        value={bodyWeight}
                        onChange={(e) => setBodyWeight(e.target.value)}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="date" sm={1}>Date</Label>
                    <Col sm={3}>
                        <Input
                        type='date'
                        id='date'
                        placeholder='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        />
                    </Col>
                </FormGroup>

                <FormGroup check row>
                    <Col sm={{ size: 15 }}>
                        <Button>{!isLoading ? "Add" : "Loading..."}</Button>
                    </Col>
                </FormGroup>

                <p>
                    {!!errors ? errors : null}
                </p>
            </Form>
        </div>
    )
}

export default AddWorkout;