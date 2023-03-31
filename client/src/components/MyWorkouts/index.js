import  React from "react";
import { useState } from 'react';
import { useSelector } from 'react-redux'

function Workouts() {
    const { currentUser } = useSelector(state=>state);
    const [workouts] = useState([
        {...currentUser.workouts}
    ])
    
    return (
        <div>
            <h3>Your Workouts:</h3>
            {workouts.map((workout) => (
                <div key={workout.id}>
                    <div>
                    <p>image placeholder</p>
                    </div>
                    <div>
                        <div>
                            <p>{workout.workoutName}</p>
                        </div>
                    </div>
                
            </div>
            ))}
            
        </div>
    )
}

export default Workouts;