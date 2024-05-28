import { useState } from "react";

function Todo({ TodoData , isFinished , id}){
    const [finished , setFinished] = useState(isFinished);
    return(
        <div>
            <input type="checkbox" checked={finished} onChange={(e) => setFinished(e.target.checked)}/>
            {TodoData}
            <button> Edit </button>
            <button> Delete </button>
        </div>
    )
}

export default Todo;