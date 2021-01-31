import React from "react";
import './SubmitComponent.css'

const SubmitComponent = () => {

    const addGoalHandler = (event) => {
        event.preventDefault()
    };

    return (
        <div className="SubmitComponent">
            <form onSubmit={addGoalHandler}>
                <input type="text"/>
                <button type="submit">Add new entry</button>
            </form>
        </div>
    );
}

export default SubmitComponent;