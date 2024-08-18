import {createContext, useContext} from "react"
 
export const TodoContext= createContext({
    todos: [           // property , just the same as varible here with array of objects
        {
            id:1,
            todo: "todo message",
            checked: false,
        }
    ],
    addtodo: (todo)=>{ },
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}

} )

export const useTodo =()=>{
    return useContext(TodoContext)
    // its necessary to pass the context/ kiske bare me baat kr rahe h in usecontext
}

export const TodoProvider = TodoContext.Provider