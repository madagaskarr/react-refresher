import React from "react";
import './ParagraphList.css'

const ParagraphList = props => {
    return (
        <div className="ParagraphList">
            <ul>
                {
                    props.listItems.map((singleListItem) => {
                        return <li key={singleListItem.id}>{singleListItem.text}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default ParagraphList;