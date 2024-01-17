//Home - link that doesn't work yet 
import React from 'react'; 
import { ReactDOM } from 'react';
import './NavBar.css'; 

function NavBar(props) {

    const glowups = ["workout", "measurements", "weather", "music", "todo", "schedule", "notes", "quotePhoto", "mealPlan", "speak", "habitMood" ]; 


    return(
        <>
            <h1>Select Your Goal</h1>

            <ul>
                {glowups.map((glowup) => <div className='goal-square'>{glowup}</div>)}
            </ul>
        </>
    )
}


export default NavBar; 