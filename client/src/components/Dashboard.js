import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ActivityCards from "./ActivityCards";
import WorkoutCard from "./WorkoutCard";

import { Row, Button } from 'reactstrap';

function Dashboard({ user, setUser }) {
    const [workouts, setWorkouts] = useState([]);
    const [updateWorkouts, setUpdateWorkouts] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("/me")
        .then(r => r.json())
        .then(userData => {
            console.log(userData.workouts)
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

    return (
        <div id='dashboard'>
            
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
            
            <div className='recent-row'>
                <Row sm={10} md={5}>
                    {workouts.slice().reverse().slice(0,5).map(w => (
                        <WorkoutCard 
                            key={w.id} 
                            workout={w} 
                            handleDelete={handleDeleteWorkout} 
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