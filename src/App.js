import './App.css'
import ParagraphListComponent from "./components/ParagraphList/ParagraphListComponent";
import SubmitComponent from "./components/SubmitComponent/SubmitComponent"
import React, {useState} from "react";


const App = () => {

    const [myArray, myCustomHandler] = useState([
        {id: "1", text: "1. Таджикская ССР – 5 651"},
        {id: "2", text: "2. Белорусская ССР – 4 933"},
        {id: "3", text: "3. Киргизская ССР – 3 975"},
        {id: "4", text: "4. Латвийская ССР – 3 069"},
        {id: "5", text: "5. Молдавская ССР – 2 873"},
        {id: "6", text: "6. Эстонская ССР – 1 669"},
        {id: "7", text: "7. Литовская ССР – 1 655"}
    ]);

    const handleAddition = (newArrayElement) => {

        // Updates based on prevoius state
        myCustomHandler((previousArray) => {
            return previousArray.concat(newArrayElement);
        });
    };

  return (
    <div className="App">
      <h1>Tigran Ghazinyan</h1>
      <ParagraphListComponent listItems={myArray}/>
      <SubmitComponent onNewItemAdded={handleAddition}/>
    </div>
  );
}

export default App;
