import React, { useState, useEffect } from "react";
import AddWorkout from "./AddWorkout";
import WorkoutCard from "./WorkoutCard";

import { Row, Button } from 'reactstrap';

function Dashboard({ user, setUser }) {
    const [workouts, setWorkouts] = useState([]);
    const [updateWorkouts, setUpdateWorkouts] = useState(false);
    const [addToggle, setAddToggle] = useState(false);
    
    useEffect(() => {
        fetch("/me")
        .then(r => r.json())
        .then(userData => {
            setWorkouts(userData.workouts)
        })
    }, [updateWorkouts]);

    function handleDeleteWorkout(workout) {
        console.log('clicked', workout.target);
    }

    return (
        <div id='dashboard'>
            
            <div className='divider-dash'>
                <hr />
             </div>
            <h2>Activity</h2>
            {/* <div id='activity-row'>
                <ActivityCards workouts={workouts} />
            </div> */}
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
                onClick={() => setAddToggle(!addToggle)}
            >{!addToggle ? 'Add Workout' : 'Just Kidding'}
            </Button>

            {addToggle ? <AddWorkout 
                updateWorkouts={updateWorkouts}
                setUpdateWorkouts={setUpdateWorkouts}
            /> : null}
        </div>
    )
}

export default Dashboard;