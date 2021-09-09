import React, { useState } from "react";
import ToDoList from "./ToDoList";
import Clock from 'react-digital-clock';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


const App = () => {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState([])
  const inputEvent = (event) => {
    setInputText(event.target.value)
  }
  const createlistItems = () => {
    setListItems((prevVal) => {
      return [...prevVal, inputText];
    });
    setInputText("");
  }
  const deleteItem = (id) => {
    setListItems((oldItems) => {
      return oldItems.filter((val, index) => {
        return id !== index;
      })
    })
  }
  return (
    <>
      {/* <div className="main-div">
        <div className="center-div">
          <h1>ToDo List</h1>
          <input type="text" placeholder="Add Items" value={ inputText} onChange={ inputEvent}></input>
          <button onClick={createlistItems} className="submit">+</button>
          <ol>
            {
              listItems.map((val, ind) => {
                return <ToDoList key={ind} id={ind} text={val} onSelect={deleteItem}/>;
              })
            }
            
          </ol>
        </div>
      </div> */}
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary">Left</button>
        <button type="button" className="btn btn-primary">Middle</button>
        <button type="button" className="btn btn-primary">Right</button>
      </div>
    </>
  )
}
export default App;