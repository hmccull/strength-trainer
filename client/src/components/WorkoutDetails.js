import React from "react";

import { Table, Button } from 'reactstrap';
import Moment from 'moment';
import FadeIn from 'react-fade-in';

function WorkoutDetails({ workout, toggleDetails, setToggleDetails }) {

    const { name, body_weight, date, active_calories, cores, assistances, one_rep_max } = workout;

    const formatDate = Moment(date).format('MM/DD')

    // get core values

    const coreName = cores.map(c => {
        return (
            <div key={c.name}>
                {c.name}
            </div>
        )
    });

    const coreWeight = cores.map(c => {
        return (
            <div key={c.id}>
                {c.lift_weight}
            </div>
        )
    });

    const coreReps = cores.map(c => {
        return (
            <div key={coreName.id}>
                {c.reps}
            </div>
        )
    });

    // get assistance values

    const assistanceName = assistances.map(a => {
        return (
            <div key={a.name}>
                {a.name}
            </div>
        )
    });

    const assistanceWeight = assistances.map(a => {
        return (
            <div key={a.id}>
                {a.lift_weight}
            </div>
        )
    });
    
    const assistanceReps = assistances.map(a => {
        return (
            <div key={a.id}>
                {a.reps}
            </div>
        )
    });

    return (
        <FadeIn transitionDuration={1500}>
        <div className='workout-details-container'>

            <FadeIn delay={350} transitionDuration={1500}>
            <h2 className='details-header'>{name}</h2>
            <br />

            <div className="stats-container">

                <div className='details-container'>
                    <h4>{formatDate}</h4>
                    <br />
                    date
                </div>

                <div className='details-container'>
                    <h4>{active_calories}</h4>
                    <br />
                    calories
                </div>

                <div className='details-container'>
                    <h4>{body_weight} lbs.</h4>
                    <br />
                    body weight
                </div>

                <div className='details-container'>
                    <h4>{one_rep_max}</h4>
                    <br />
                    ~1RM
                </div>
            </div>
            </FadeIn>

            <div className="lifts-container">
            <FadeIn delay={450} transitionDuration={1500}>
                <div className='cores-container'>
                    <Table
                        responsive
                    >
                        <thead>
                            <tr>
                                <th>
                                    Core Lift
                                </th>
                                <th>
                                    Weight
                                </th>
                                <th>
                                    Reps
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope="row">
                                    {coreName}
                                </th>
                                <td>
                                    {coreWeight}
                                </td>
                                <td>
                                    {coreReps}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </FadeIn>

            <FadeIn delay={600} transitionDuration={1500}>
                <div className='assistances-container'>
                    <Table
                        responsive
                    >
                        <thead>
                            <tr>
                                <th>
                                    Assistance Exercise
                                </th>
                                <th>
                                    Weight
                                </th>
                                <th>
                                    Reps
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope="row">
                                    {assistanceName}
                                </th>
                                <td>
                                    {assistanceWeight}
                                </td>
                                <td>
                                    {assistanceReps}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </FadeIn>

            </div>

            <div className="details-btn">
                {/* <Button className="btn">
                    Edit
                </Button> */}
                <Button onClick={() => setToggleDetails(!toggleDetails)}>
                    Close
                </Button>
            </div>

        </div>
        </FadeIn>
    )
}

export default WorkoutDetails;