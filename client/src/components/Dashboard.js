import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ActivityCards from "./ActivityCards";
import WorkoutCard from "./WorkoutCard";
import WorkoutDetails from "./WorkoutDetails";

import moment from "moment";
import { Row, Button } from 'reactstrap';

function Dashboard({ user, setUser }) {
    const [workouts, setWorkouts] = useState([]);
    const [updateWorkouts, setUpdateWorkouts] = useState(false);
    const [toggleDetails, setToggleDetails] = useState(false);
    const [viewWorkout, setViewWorkout] = useState({});
    const [toggleLastWeek, setToggleLastWeek] = useState(false);
    const [viewLastWeek, setViewLastWeek] = useState([]);
    const [toggleThisWeek, setToggleThisWeek] = useState(false);
    const [viewThisWeek, setViewThisWeek] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("/me")
        .then(r => r.json())
        .then(userData => { 
            setWorkouts(userData.workouts)
        })
    }, [updateWorkouts]);

    function handleDeleteWorkout(e, id) {
        fetch(`/workouts/${id}`, {
            method: 'DELETE'
        })
        .then(r => {
            if (r.ok) {
                setUpdateWorkouts(!updateWorkouts)
            }
        })
    }

    // view workout detail cards
    function handleViewClick(e, workout) {
        setToggleDetails(true)
        setViewWorkout(workout);
    }

    // filter workout cards by this week
    function handleThisWeek() {
        setToggleLastWeek(false)
        setToggleThisWeek(!toggleThisWeek)

        const todayDate = new Date();
        const startDayOfThisWeek = moment(todayDate).startOf('week');

        const workoutsArr = workouts.filter(w => moment(w.date).isBetween(startDayOfThisWeek, todayDate))

        setViewThisWeek(workoutsArr);
    }

    // filter workout cards by last week
    function handleLastWeek() {
        setToggleThisWeek(false)
        setToggleLastWeek(!toggleLastWeek)

        const todayDate = new Date()
        const startDayOfPrevWeek = moment(todayDate).subtract(1, 'week').startOf('week').format('LLLL')
        const lastDayOfPrevWeek = moment(todayDate).subtract(1, 'week').endOf('week').format('LLLL')

        const workoutsArr = workouts.filter(w => moment(w.date).isBetween(startDayOfPrevWeek, lastDayOfPrevWeek))

        setViewLastWeek(workoutsArr)
    }

    // workout cards to display
    const workoutsToDiplay = () => {
        if (toggleLastWeek) {
            return viewLastWeek
        } else if (toggleThisWeek) {
            return viewThisWeek
        } else {
            return workouts
        }
    }

    return (
        <>
            <div id="dashboard-btns">
                <Button 
                    id="add-btn" 
                    size="lg" 
                    onClick={() => handleThisWeek()}
                >{toggleThisWeek ? 'View All' : 'View This Week'}
                </Button>

                <Button 
                    id="add-btn" 
                    size="lg" 
                    onClick={() => handleLastWeek()}
                >{toggleLastWeek ? 'View All' : 'View Last Week'}
                </Button>

                <Button 
                    id="add-btn" 
                    size="lg" 
                    onClick={() => navigate("/new")}
                >Add Workout
                </Button>
            </div>
            
        <div id='dashboard'>
            
            <h2 className="dash-header">Activity</h2>
            <div className='divider-dash'>
                <hr />
            </div>

            {Object.keys(workouts).length ? 
                <><div className='activity-row-container'>
                    <ActivityCards workouts={workoutsToDiplay()} />
                </div></> : null
            }

            <h2 className="dash-header">Recent Workouts</h2>

            <div className='divider-dash'>
                <hr />
             </div>
            <br />
            {toggleDetails ? 
                <WorkoutDetails workout={viewWorkout} toggleDetails={toggleDetails} setToggleDetails={setToggleDetails} /> 
                : null
            }
            
            <div className='recent-row-container'>
                <Row sm={10} md={5}>
                    {workoutsToDiplay().slice().reverse().map(w => (
                        <WorkoutCard 
                            key={w.id} 
                            workout={w} 
                            handleDelete={handleDeleteWorkout} 
                            handleViewClick={handleViewClick}
                        />
                        ))
                    }
                </Row>
            </div>

        </div>
        </>
    )
}

export default Dashboard;