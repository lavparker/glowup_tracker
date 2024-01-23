import React from 'react';
import './NavBar.css';

function NavBar(props) {

    const glowups = [
        {id: 1, glowup: "workout", image: "workout.png"},
        {id: 2, glowup: "measurements", image: "measurements.png"},
        {id: 3, glowup: "weather", image: "weather.png"},
        {id: 4, glowup: "music", image: "music.png"},
        {id: 5, glowup: "todo", image: "todolist.png"},
        {id: 6, glowup: "schedule", image: "schedule.png"},
        {id: 7, glowup: "notes", image: "notes.png"},
        {id: 8, glowup: "quotePhoto", image: "quote.png"},
        {id: 9, glowup: "mealPlan", image: "mealPlan.png"},
        {id: 10, glowup: "habitMood", image: "mood.png"},
        {id: 11, glowup: "selfCare", image: "selfcare.png"}
    ];

    return (
        <>
            <h1>Select Your Goal</h1>

            <ul>
                {glowups.map((goal) => (
                    <div className='goal-square' key={goal.id}>
                        {goal.glowup}
                        <img src={require(`./images/${goal.image}`).default} alt={`${goal.glowup} Image`} />
                        hello
                    </div>
                ))}
            </ul>

            
        </>


    )
}

export default NavBar;
