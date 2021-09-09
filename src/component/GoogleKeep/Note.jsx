import DeleteIcon from '@material-ui/icons/Delete';
const Note = (props) => {
    const delNote = () => {
        props.delete(props.id)
    }
    return (
        <div className="note">
            <h1>{ props.title}</h1>
            <p>{props.content}</p>
            <button className="deleteBtn" onClick={delNote}>
                <DeleteIcon className="deleteIcon"/>
            </button>
        </div>
    )
}
export default Note;