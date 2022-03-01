import React, { useState, useEffect } from "react";
import AddWorkout from "./AddWorkout";
import WorkoutCard from "./WorkoutCard";

import { Row } from 'reactstrap';

function Dashboard({ user, setUser }) {
    const [workouts, setWorkouts] = useState([]);
    const [updateWorkouts, setUpdateWorkouts] = useState(false);
    const [recentWorkouts, setRecentWorkouts] = useState([]);

    // useEffect(() => {
    //     fetch("/me")
    //     .then(r => r.json())
    //     .then(userData => {
    //         setWorkouts(userData.workouts)
    //         recentWorkoutEl();
    //     })
    // }, []);
    
    useEffect(() => {
        fetch("/me")
        .then(r => r.json())
        .then(userData => {
            setWorkouts(userData.workouts)
            recentWorkoutEl();
        })
    }, [updateWorkouts]);

   const recentWorkoutEl = () => {
       for(let i = 0; i < 5; i++) {
           workouts.map(w => {
               setRecentWorkouts([...recentWorkouts, w])
           })
       }
   }

    return (
        <div id='dashboard'>
            <h1 id='dash-welcome'>Welcome back, {user.username}!</h1>
            <br />
            <h2>Recent Workouts</h2>
            <div className='divider-dash'>
                <hr />
             </div>
            <br />
            <div className='recent-row'>
                <Row sm={2} md={5}>
                    {workouts.map(w => (
                        <WorkoutCard key={w.id} workout={w} />
                    ))}
                </Row>
            </div>
            <AddWorkout 
                updateWorkouts={updateWorkouts}
                setUpdateWorkouts={setUpdateWorkouts}
            />
        </div>
    )
}

export default Dashboard;