import React, { useState} from "react";
const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);
    const expandit = () => {
        setExpand(true);
    }
    const shrinkit = () => {
        setExpand(false)
    }
    const [noteData,setNoteData] = useState({
        title: "",
        content:""
    });
    const onsubmit = () => {
        props.add(noteData)
        setNoteData(() => {
            return {
                title: "",
                content:""
            }
        })
       
    }
    const addEvent = (event) => {
        const { name, value } = event.target;
        setNoteData((oldData) => {
            return {
                ...oldData,
                [name]:value
            }
        })
    }
    return (
        <div className="main-note" onClick={ expandit } onDoubleClick={ shrinkit}>
            {
                expand ? <input type="text" name="title" value={ noteData.title } onChange={ addEvent } placeholder="Title" autoComplete="off" /> : null
            }
                 
            <textarea cols="13" rows="6" name="content" value={ noteData.content } onChange={ addEvent } placeholder="Add a note..."></textarea>
            { expand? <button className="addBtn" type="submit" onClick={onsubmit}>
                    <p className="addIcon">+</p>
            </button> : null
            }
               
        </div>
    )
}
export default CreateNote;