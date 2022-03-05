import React from "react";

import { Card, Col, CardImg, CardBody, CardText, Button } from 'reactstrap';

function WorkoutCard({ workout, handleDelete, handleViewClick }) {

    const { id, name, duration,  active_calories, body_weight, date } = workout

    return (
        <div className='workout-cards'>
                <Col>
                    <Card color='dark' inverse className="workout-card">
                        <CardImg variant='top' src='/deadlift.jpg' />
                        <CardBody>
                            <h4>{name}</h4>
                            <hr />
                            <CardText>
                                {active_calories} calories
                                <br/>
                                {duration} minutes
                            </CardText>
                            <Button 
                                id={id}
                                onClick={(e) => handleViewClick(e, workout)}
                            >View</Button>
                            <Button 
                                id={id}
                                onClick={(e) => handleDelete(e, id)}
                            >X</Button>
                        </CardBody>
                    </Card>
                </Col>
        </div>
    )
}

export default WorkoutCard;