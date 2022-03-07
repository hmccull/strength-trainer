import React from "react";

function FilterWorkouts() {
    return (
        <div id='filter-container'>
            <Form onSubmit={handleSubmit}>
                <FormGroup row>
                    <Label for="core-name">
                        Filter Workouts
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
                                bench press
                            </option>
                        </Input>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}