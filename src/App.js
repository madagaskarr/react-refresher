import './App.css'
import ParagraphListComponent from "./components/ParagraphList/ParagraphListComponent";
import SubmitComponent from "./components/SubmitComponent/SubmitComponent"
import React from "react";

const App = () => {

    const myArray = [
        {id: "1", text: "1. Таджикская ССР – 5 651"},
        {id: "1", text: "2. Белорусская ССР – 4 933"},
        {id: "1", text: "3. Киргизская ССР – 3 975"},
        {id: "1", text: "4. Латвийская ССР – 3 069"},
        {id: "1", text: "5. Молдавская ССР – 2 873"},
        {id: "1", text: "6. Эстонская ССР – 1 669"},
        {id: "1", text: "7. Литовская ССР – 1 655"}
    ]

  return (
    <div className="App">
      <h1>Tigran Ghazinyan</h1>
      <ParagraphListComponent listItems={myArray}/>
      <SubmitComponent />
    </div>
  );
}

export default App;
