import React, { useEffect } from "react";

import { Card, Col, CardText, CardTitle, Row } from 'reactstrap';

function ActivityCards({ workouts }) {
    
    // will update on weekly/monthly basis
    let calorieCount = 0;
    const caloriesElement = workouts.map(w => {
        return (
            calorieCount += w.active_calories
        )
    })
    
    useEffect(() => {
        console.log(workouts[workouts.length - 1])
    })
    return (
        <div className='activity-cards'>
            <Row md={4}>
                <Col sm='6'>
                    <Card body inverse className="activity-card" color='dark'>
                        <CardText>
                            total calories
                        </CardText>
                        <CardTitle align='center' tag="h1">
                        {calorieCount}
                        </CardTitle>
                    </Card>
                </Col>

                <Col>
                    <Card body inverse className="activity-card" color='dark'>
                        <CardText>
                        total workouts
                        </CardText>
                        <CardTitle align='center' tag="h1">
                        {workouts.length}
                        </CardTitle>
                    </Card>
                </Col>
                
                <Col>
                    <Card body inverse className="activity-card" color='dark'>
                        <CardText>
                        recent body weight
                        </CardText>
                        <CardTitle align='center' tag="h1">
                            {workouts[workouts.length - 1].body_weight}
                        </CardTitle>
                    </Card>
                </Col>

                <Col>
                    <Card body inverse className="activity-card" color='dark'>
                        <CardText>
                        recent ~1RM for {workouts[workouts.length - 1].name} workout
                        </CardText>
                        <CardTitle align='center' tag="h1">
                            {workouts[workouts.length - 1].one_rep_max}
                        </CardTitle>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ActivityCards;