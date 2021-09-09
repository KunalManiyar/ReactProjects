import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./keep.css";
import CreateNote from "./CreateNote";
import Note from "./Note";
const App = () => {
    const [noteArray,setNoteArray] = useState([]);

    const addNote = (note) => {
        setNoteArray((prevData) => {
            return [
                ...prevData,
                note
            ]
        })
    }
    const onClickDelete = (id) => {
        setNoteArray((oldData) => {
           return oldData.filter((currNote, index) => {
                return index !== id;
            })
        } )
    }
    return (
        <>
            <Header />
            <CreateNote add={ addNote } />
            <div className="allNotes">
                { noteArray.map((currNote,index) => {
                    return <Note key={ index } id={ index } title={ currNote.title } content={ currNote.content} delete={ onClickDelete}/>
                })}
            </div> 
            <Footer />
        </>
    )
}
export default App;
