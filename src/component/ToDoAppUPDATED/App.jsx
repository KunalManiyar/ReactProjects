import "./ToDo.css";
import todo from "../../Images/todo.jpg";
import { useState } from "react";
const App = () => {
    const [inputData, setInputData] = useState("");
    const [toggleBtn, setToggleBtn] = useState(false);
    const [items, setItems] = useState([]);
    const [editDataId, setEditDataId] = useState();

    const addItems = () => {
        if (inputData === "") {
            alert("Please enter data first");
        }
        else if (inputData && toggleBtn) {
            setItems(
                    items.map((elem) => {
                        if (elem.id === editDataId) {
                            return {...elem,name:inputData}
                        }
                        return elem;
                    })   
            )
            setToggleBtn(false);
            setInputData("");

        }
        else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData };
            setItems([...items, allInputData]);
            setInputData("");
        }
        
    }
    const editData = (id) => {
        const editDataId = items.find((elem) => {
            return id === elem.id;
        });
        setInputData(editDataId.name);
        setToggleBtn(true);
        setEditDataId(id);
    }
    const delItem = (id) => {
        setItems(items.filter((elem) => {
            return id !== elem.id;
        }))
    }
    const delAll = () => {
        setItems([])
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={ todo } alt="todo-logo " />
                        <figcaption>Add your list here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="Add Items..." value={ inputData } onChange={ (event) => setInputData(event.target.value) } />
                        {
                            toggleBtn ? <i className="far fa-edit add-btn" title="Edit Item" onClick={ addItems}></i>
                            :<i className="fa fa-plus add-btn" title="Add Item" onClick={ addItems }></i>
                        }
                    </div>
                    <div className="showItems">
                        { items.map((elem) => {
                            return  <div className="eachItem" key={elem.id}>
                                        <h3>{ elem.name }</h3>
                                        <div className="btns">
                                                 <i className="far fa-edit edit-btn" title="Edit Item" onClick={()=> editData(elem.id) }></i>
                                                <i className="far fa-trash-alt trash-btn" title="Delete Item" onClick={()=> delItem(elem.id)}></i>
                                        </div>       
                                    </div>
                        })}
                        
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" onClick={ delAll}>
                            <span>CHECK LIST</span>
                        </button>
                    </div>
               </div>
            </div>
        </>
    )
}
export default App;