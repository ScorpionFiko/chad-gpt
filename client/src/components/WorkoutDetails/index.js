import React, { useState } from 'react';
import { useSelector } from "react-redux";

function WorkoutDetails() {

    const { currentUser } = useSelector((state) => state);
    const [workouts] = useState([{ ...currentUser.workouts }]);
    console.log(workouts)

    return (
        <div>
            <p>Placeholder text</p>
        </div>
    )
}

export default WorkoutDetails;