import React, { useState } from "react";

import { AiOutlineFire  } from 'react-icons/ai';
import { IoMdDoneAll } from 'react-icons/io';
import { MdOutlineMonitorWeight } from 'react-icons/md';
import { GiWeightLiftingUp } from 'react-icons/gi';
import ReactTooltip from "react-tooltip";
import { Card, Col, CardTitle, Row } from 'reactstrap';
import FadeIn from 'react-fade-in';

import BodyWeightChart from "./BodyWeightChart";
import OneRMChart from "./OneRMChart";
import CaloriesChart from "./CaloriesChart";



function ActivityCards({ workouts }) {
    const [bodyToggle, setBodyToggle] = useState(false);
    const [calorieToggle, setCalorieToggle] = useState(false);
    const [oneRepToggle, setOneRepToggle] = useState(false);
    
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
                <FadeIn transitionDuration={2000}>
                    <Col>
                        <Card body inverse className="activity-card" color='dark' data-tip data-for="total-workouts">
                            <ReactTooltip id="total-workouts" place="bottom" effect="solid">
                                workouts completed
                            </ReactTooltip>
                            <CardTitle align='center' tag="h2">
                                <IoMdDoneAll className="activity-icon" />
                                <br />
                                {workouts.length}
                            </CardTitle>
                        </Card>
                    </Col>
                </FadeIn>

                <FadeIn delay={300} transitionDuration={2000}>
                    <Col>
                        <Card body inverse className="activity-card" color='dark' data-tip data-for="total-calories" onClick={() => setCalorieToggle(!calorieToggle)}>
                            <ReactTooltip id="total-calories" place="bottom" effect="solid">
                                total calories burned
                            </ReactTooltip>
                            <CardTitle align='center' tag="h2">
                                <AiOutlineFire className="activity-icon" />
                                <br />
                                {calorieCount}
                            </CardTitle>
                        </Card>
                    </Col>
                </FadeIn>

                <FadeIn delay={500} transitionDuration={2000}>
                    <Col>
                        <Card body inverse className="activity-card" color='dark' data-tip data-for="one-rep-max" onClick={() => setOneRepToggle(!oneRepToggle)}>
                            <ReactTooltip id="one-rep-max" place="bottom" effect="solid">
                                recent estimated one-rep-max
                            </ReactTooltip>
                            <CardTitle align='center' tag="h2">
                                <GiWeightLiftingUp className="activity-icon" />
                                <br />
                                {workouts[workouts.length - 1].one_rep_max} lbs.
                            </CardTitle>
                        </Card>
                    </Col>
                </FadeIn>

                <FadeIn delay={700} transitionDuration={2000}>
                    <Col>
                        <Card body inverse className="activity-card" color='dark' data-tip data-for="body-weight" onClick={() => setBodyToggle(!bodyToggle)}>
                            <ReactTooltip id="body-weight" place="bottom" effect="solid">
                                recent body weight
                            </ReactTooltip>
                            <CardTitle align='center' tag="h2">
                                <MdOutlineMonitorWeight className="activity-icon" />
                                <br />
                                {workouts[workouts.length - 1].body_weight} lbs.
                            </CardTitle>
                        </Card>
                    </Col>
                </FadeIn>
            </Row>

            <FadeIn delay={800} transitionDuration={2000}>
                {bodyToggle ? <><div className='charts-container'>
                    <BodyWeightChart workouts={workouts} />
                </div></> : null}
                {calorieToggle ? <><div className='charts-container'>
                    <CaloriesChart workouts={workouts} />        
                </div></> : null}
                {oneRepToggle ? <><div className='charts-container'>
                    <OneRMChart workouts={workouts} />        
                </div></> : null}
            </FadeIn>        
            
        </div>
    )
}

export default ActivityCards;