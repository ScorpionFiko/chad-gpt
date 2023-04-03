import React from "react";


export function ExerciseImage({ imageLink, exerciseName }) {
    return ((imageLink !== '') ?
        <>
            <div className="w-100 mt-5 text-white d-flex justify-content-center">
                <h3>{exerciseName}</h3>
            </div>
            <div className="w-100 mb-5 d-flex justify-content-center">
                <img className="bg-white w-100" id="exerciseImage" src={imageLink} alt="Exercise Diagram" />
            </div>
        </> : <div></div>
    );
}