import { useState } from "react";

function Todo({ TodoData , isFinished , changedFinished , onDelete , onEdit}){
    const [finished , setFinished] = useState(isFinished);
    const [isEditing , setIsEditing] = useState(false);
    const [editText , setEditText] = useState(TodoData);
    return(
        <div>
            <input type="checkbox" checked={finished} onChange={(e) => {
                setFinished(e.target.checked)
                changedFinished(e.target.checked);
                }}/>
            {/* {TodoData} */}
            {(isEditing) ? <input type="text" value={editText} onChange={e => setEditText(e.target.value)} /> : <span>{TodoData}</span>}
            <button onClick={() => {
                setIsEditing(!isEditing);
            }}> {(!isEditing) ? 'Edit' : 'Save'}</button>
            <button onClick={onDelete}> Delete </button>
        </div>
    )
}

export default Todo;