import React from "react";

import { Table, Button } from 'reactstrap';
import Moment from 'moment';

function WorkoutDetails({ workout, toggleDetails, setToggleDetails }) {

    const { name, body_weight, date, active_calories, cores, assistances, one_rep_max } = workout;

    const formatDate = Moment(date).format('MM/DD')

    // get core values

    const coreName = cores.map(c => {
        return (
            <div>
                {c.name}
            </div>
        )
    });

    const coreWeight = cores.map(c => {
        return (
            <div>
                {c.lift_weight}
            </div>
        )
    });

    const coreReps = cores.map(c => {
        return (
            <div>
                {c.reps}
            </div>
        )
    });

    // get assistance values

    const assistanceName = assistances.map(a => {
        return (
            <div className="assistance-names">
                {a.name}
            </div>
        )
    });

    const assistanceWeight = assistances.map(a => {
        return (
            <div>
                {a.lift_weight}
            </div>
        )
    });
    
    const assistanceReps = assistances.map(a => {
        return (
            <div>
                {a.reps}
            </div>
        )
    });

    return (
        <div className='workout-details-container'>
            <h2 id='modal-header'>{name}</h2>
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


            <div className="lifts-container">
                <div className='cores-container'>
                    <Table
                        hover
                        responsive
                        size=""
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
                                <td scope="row">
                                    {coreWeight}
                                </td>
                                <td>
                                    {coreReps}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className='assistances-container'>
                    <Table
                        hover
                        responsive
                        size=""
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
                                <td scope="row">
                                    {assistanceWeight}
                                </td>
                                <td>
                                    {assistanceReps}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>

            <div className="modal-btns">
                {/* <Button className="btn">
                    Edit
                </Button> */}
                <Button className="-btn" onClick={() => setToggleDetails(!toggleDetails)}>
                    Close
                </Button>
            </div>

        </div>
    )
}

export default WorkoutDetails;