import React, { useState, useEffect } from "react";

import { Card, Col, CardText, CardTitle, Row } from 'reactstrap';

function ActivityCards({ workouts }) {
    const [cores, setCores] = useState("");
    const [oneRepMax, setOneRepMax] = useState("");
    const [liftWeight, setLiftWeight] = useState("");
    const [reps, setReps] = useState("");


    // useEffect(() => {
    //     const w = workouts.slice(-1)[0];
    //     fetch(`/one-rep-max`)
    //     .then(r => r.json())
    //     .then(data => {
    //         console.log(data.cores);
    //         // calculateOneRepMax();
    //     })
    // }, []);

    // const calculateOneRepMax = () => {
    //     console.log({ cores })
    //     max_lift = cores.map(c => )
    // }

    // console.log({ oneRepMax })

    // will update on weekly/monthly basis
    let calorieCount = 0;
    const caloriesElement = workouts.map(w => {
        return (
            calorieCount += w.active_calories
        )
    })
    
    return (
        <div className='activity-cards'>
            <Row md={4}>
                <Col sm='6'>
                    <Card body inverse className="activity-card" color='dark'>
                        <CardText>
                            total calories burned
                        </CardText>
                        <CardTitle tag="h5">
                        {calorieCount}
                        </CardTitle>
                    </Card>
                </Col>

                <Col>
                    <Card body inverse className="activity-card" color='dark'>
                        <CardText>
                        total workouts
                        </CardText>
                        <CardTitle tag="h5">
                        {workouts.length}
                        </CardTitle>
                    </Card>
                </Col>
                
                <Col>
                    <Card body inverse className="activity-card" color='dark'>
                        <CardText>
                        recent weight
                        </CardText>
                        <CardTitle tag="h5">
                            {workouts[0].body_weight}
                        </CardTitle>
                    </Card>
                </Col>

                <Col>
                    <Card body inverse className="activity-card" color='dark'>
                        <CardText>
                        recent 1RM
                        </CardText>
                        <CardTitle tag="h5">
                            {oneRepMax}
                        </CardTitle>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ActivityCards;