import React, { useEffect } from "react";

import { AiOutlineFire  } from 'react-icons/ai';
import { IoMdDoneAll } from 'react-icons/io';
import { MdOutlineMonitorWeight } from 'react-icons/md';
import { GiWeightLiftingUp } from 'react-icons/gi';
import ReactTooltip from "react-tooltip";
import { Card, Col, CardText, CardTitle, Row } from 'reactstrap';

function ActivityCards({ workouts }) {
    
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
                <Col>
                    <Card body inverse className="activity-card" color='dark' data-tip data-for="total-workouts">
                        <ReactTooltip id="total-workouts" place="bottom" effect="solid">
                            total workouts
                        </ReactTooltip>
                        {/* <CardText>
                            total workouts
                        </CardText> */}
                        <CardTitle align='center' tag="h1">
                            <IoMdDoneAll className="activity-icon" />
                            <br />
                            {workouts.length}
                        </CardTitle>
                    </Card>
                </Col>


                <Col>
                    <Card body inverse className="activity-card" color='dark' data-tip data-for="total-calories">
                        <ReactTooltip id="total-calories" place="bottom" effect="solid">
                            total calories burned
                        </ReactTooltip>
                        {/* <CardText>
                            total calories
                        </CardText> */}
                        <CardTitle align='center' tag="h1">
                            <AiOutlineFire className="activity-icon" />
                            <br />
                            {calorieCount}
                        </CardTitle>
                    </Card>
                </Col>

                <Col>
                    <Card body inverse className="activity-card" color='dark' data-tip data-for="one-rep-max">
                        <ReactTooltip id="one-rep-max" place="bottom" effect="solid">
                            recent estimated one-rep-max
                        </ReactTooltip>
                        {/* <CardText>
                            recent ~1RM for {workouts[workouts.length - 1].name} workout
                        </CardText> */}
                        <CardTitle align='center' tag="h1">
                            <GiWeightLiftingUp className="activity-icon" />
                            <br />
                            {workouts[workouts.length - 1].one_rep_max} lbs.
                        </CardTitle>
                    </Card>
                </Col>

                <Col>
                    <Card body inverse className="activity-card" color='dark' data-tip data-for="body-weight">
                        <ReactTooltip id="body-weight" place="bottom" effect="solid">
                            recent body weight
                        </ReactTooltip>
                        {/* <CardText>
                            recent body weight
                        </CardText> */}
                        <CardTitle align='center' tag="h1">
                            <MdOutlineMonitorWeight className="activity-icon" />
                            <br />
                            {workouts[workouts.length - 1].body_weight} lbs.
                        </CardTitle>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ActivityCards;