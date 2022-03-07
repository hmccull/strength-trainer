import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ActivityCards from "./ActivityCards";
import WorkoutCard from "./WorkoutCard";
import WorkoutDetails from "./WorkoutDetails";

import { Row, Button } from 'reactstrap';
// import CoreSelect from "./CoreSelect";

function Dashboard({ user, setUser }) {
    const [workouts, setWorkouts] = useState([]);
    const [updateWorkouts, setUpdateWorkouts] = useState(false);
    const [isToggle, setIsToggle] = useState(false);
    const [viewWorkout, setViewWorkout] = useState({});
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

    function handleViewClick(e, workout) {
        setIsToggle(true)
        setViewWorkout(workout);
    }

    return (
        <div id='dashboard'>

            {/* <CoreSelect /> */}
            
            <h2>Activity</h2>
            <div className='divider-dash'>
                <hr />
            </div>

            {Object.keys(workouts).length ? <>
            <div id='activity-row'>
                <ActivityCards workouts={workouts} />
            </div></> : null}
            <br />
            <br />
            <br />

            <h2>Recent Workouts</h2>
            <div className='divider-dash'>
                <hr />
             </div>
            <br />
            {isToggle ? 
                <WorkoutDetails workout={viewWorkout} isToggle={isToggle} setIsToggle={setIsToggle} /> : null}
            
            <div className='recent-row'>
                <Row sm={10} md={5}>
                    {workouts.slice().reverse().slice(0,10).map(w => (
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


            <Button 
                id="add-btn" 
                size="lg" 
                onClick={() => navigate("/new")}
            >Add Workout
            </Button>
        </div>
    )
}

export default Dashboard;