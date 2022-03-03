import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function AddCoreLift() {
    const [name, setName] = useState("");
    const [reps, setReps] = useState("");
    const [liftWeight, setLiftWeight] = useState("");
    
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
            workout_id: id,
        };

        fetch("/cores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCoreLift),
        }).then((r) => {
            setIsLoading(false)
            if (r.ok) {
                r.json().then((newCoreLift) => {
                    // update();
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
    }

    function handleAssistanceClick() {
        navigate(`/me/workout/new/${id}/assistance`)
    }

    return(
        <div id='add-workout'>
           <h2>Add Core Lift</h2>
            <Form onSubmit={handleSubmit}>

                <FormGroup row>
                    <Label for="core-name">
                        Core Lift
                    </Label>
                    <Col sm={3}>
                        <Input
                            id="core-name"
                            value={name}
                            name="select"
                            type="select"
                            onChange={(e) => setName(e.target.value)}
                        >
                            <option>
                                select core lift
                            </option>
                            <option>
                                deadlift
                            </option>
                            <option>
                                squat
                            </option>
                            <option>
                                shoulder press
                            </option>
                            <option>
                                bench
                            </option>
                        </Input>
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
                        <Button>{!isLoading ? "Add Core Set" : "Loading..."}</Button>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={{ size: 15 }}>
                        <Button onClick={handleAssistanceClick}>Add Assistance Exercises</Button>
                    </Col>
                </FormGroup>

                <p>
                    {!!errors ? errors : null}
                </p>
            </Form>
        </div>
    )
}

export default AddCoreLift;