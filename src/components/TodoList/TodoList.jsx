import Todo from "../Todo/Todo"

function TodoList({list , updateList}){

    return(
        <div>
        {list.length > 0 && 
        list.map(todo => <Todo 
                            key={todo.id} 
                            id={todo.id}
                            isFinished={todo.finished} 
                            TodoData={todo.todoData}
                            changedFinished={(isFinished) =>{
                                const updateList = list.map(t => {
                                    if(t.id == todo.id){
                                        todo.finished = isFinished;
                                    }
                                    return t;
                                });
                                updateList(updateList);
                            }}
                            />)}
        </div>
    );
}

export default TodoList;