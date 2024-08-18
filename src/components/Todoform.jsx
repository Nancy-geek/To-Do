import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoForm() {
    const [todo,setTodo]= useState("")         //individual todo
    const {addtodo} =useTodo()

    const add=(e)=>{
        e.preventDefault()

        if(!todo) return  // no todo adding 
        // addtodo (todo)   as we are spreding the todo object 
        // addtodo({id:Date.now(), todo: todo, complete: false})
        addtodo({todo, checked: false})           // shorthand of above 
            //  as id already in addtodo given , todo:todo same field name so replaced as one 
        setTodo("")      // todo variable ko use krke empty kr diya  so that next me kahi purani value hi pass na ho jaye  
    }

return (
    // automatically submit
    <form onSubmit={add} className="flex">          
        <input
            type="text"
            placeholder="Write Todo..."
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"

            value={todo}        // called wiring (input ki wiring state ke saath)
            onChange={(e)=> setTodo(e.target.value)}
        
        />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
            Add
        </button>
    </form>
);
}

export default TodoForm;


