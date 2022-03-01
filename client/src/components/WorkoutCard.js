import React, { useState, useEffect } from "react";

import { Card, Col, CardImg, CardBody, CardText } from 'reactstrap';

function WorkoutCard({ workout }) {

    const { name, duration,  active_calories, body_weight, date } = workout
    
    return (
        <div className='workout-card'>
                <Col>
                    <Card>
                        <CardImg variant='top' src='/deadlift.jpg' />
                        <CardBody>
                            <h4>{name}</h4>
                            <hr />
                            <CardText>
                                 {active_calories} calories
                                <br/>
                                {duration} minutes
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
        </div>
    )
}

export default WorkoutCard;