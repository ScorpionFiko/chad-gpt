import React from "react";


export function ExerciseImage({imageLink}) {
    return (
        <div className="w-100 mb-5 d-flex justify-content-center">
            <img className="bg-white w-100" id="exerciseImage" src={imageLink} alt="Exercise Diagram" />
        </div>
    );
}