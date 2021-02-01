import React from "react";
import './SubmitComponent.css'

const SubmitComponent = props => {

    const addGoalHandler = (event) => {
        event.preventDefault()

        const newAddition = {
            id: Math.random().toString(),
            text: "New text"
        }
        props.onNewItemAdded(newAddition);
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