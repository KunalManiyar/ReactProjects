import DeleteIcon from '@material-ui/icons/Delete';
const ToDoList = (props) => {
    return (
        <>
        <div>kunal</div>
            <div className="listItem">
                <button className="cross" onClick={()=>{props.onSelect(props.id)}}><DeleteIcon/></button>
                <li>{props.text}</li>
            </div>
        </>
            
        )
}
export default ToDoList;