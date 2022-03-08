import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function AddAssistance() {
    const [name, setName] = useState("");
    const [reps, setReps] = useState("");
    const [liftWeight, setLiftWeight] = useState("");
    const [coreLift, setCoreLift] = useState("");
    
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams();
    
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true)

        const newCoreLift = { 
            name, 
            reps,
            lift_weight: liftWeight,
            core_lift: coreLift,
            workout_id: id,
        };

        fetch("/assistances", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCoreLift),
        }).then((r) => {
            setIsLoading(false)
            if (r.ok) {
                r.json().then((newCoreLift) => {
                });
            } else {
                r.json().then((err) => {
                    setErrors(err.errors);
                });
            }
        });
        setName("");
        setReps("");
        setLiftWeight("");
        setCoreLift("");
    }

    return(
        <div className='workout-container'>
            <div className='add-workout'>
            <h2>Add Assistance Exercises</h2>
                <Form onSubmit={handleSubmit}>

                    <FormGroup row>
                        <Label for="name">Name</Label>
                        <Col sm={3}>
                            <Input
                            type='text'
                            id='name'
                            placeholder='name this exercise'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="reps">Reps</Label>
                        <Col sm={3}>
                            <Input
                            type='number'
                            id='reps'
                            placeholder='# of reps'
                            value={reps}
                            onChange={(e) => setReps(e.target.value)}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="weight">Weight</Label>
                        <Col sm={3}>
                            <Input
                            type='number'
                            id='weight'
                            placeholder='set weight in lbs.'
                            value={liftWeight}
                            onChange={(e) => setLiftWeight(e.target.value)}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={{ size: 15 }}>
                            <Button>Add Assistance Exercises</Button>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={{ size: 15 }}>
                            <Button onClick={() => navigate("/me")}>Workout Complete</Button>
                        </Col>
                    </FormGroup>

                    {errors.map((err) => (
                        <p key={err}>{err}</p>
                    ))}
                </Form>
            </div>
        </div>
    )
}

export default AddAssistance;