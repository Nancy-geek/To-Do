import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './components/Todoform'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, settodos] = useState([])      // empty array because else null vagrah hoga to problem aayegi thodi
// todos is array of all the todos i have in my list 

  const addtodo=(todo)=>{
    // settodos(todo)      // this will erase all the previous and put only the new todo in todos variable
    settodos((prev)=> [ {id: Date.now() , ...todo}, ...prev])

  // added id as it should be different for each and other to be as same in the object 
  // learn this thing (arrow function) in interview video remember , when we need states previous value too
  }
   
  const updateTodo=(id, todo)=>{
    // by prev map(loop) i will get each todo and each todo is an object 
    
    settodos((prev)=>
      prev.map((prevTodo)=>
        prevTodo.id===id ? todo : prevTodo                    
    ) )
    // updating the prevtodo to todo (only that object) if id matches else it would remain as same as before 

  } 

  const deleteTodo=(id)=>{
    settodos((prev)=>
      prev.filter((prevtodo)=> prevtodo.id!==id  )    
      // filtering where allowing only those whose id didnt match 
    )
  }

  const toggleComplete=(id)=>{
    settodos((prev)=>
    prev.map((prevtodo)=>
       prevtodo.id==id ? {...prevtodo, checked: !prevtodo.checked }: prevtodo)
    )
  }

  useEffect(()=>{
    const todos= JSON.parse (localStorage.getItem("todos"))            // todos in get item is the key 

    if(todos && todos.length>0 ){         // todos no doubt is JSON but at the end it is array only , json can in array format also (array ke andar objects h na )
      settodos(todos)                    // setting all the get values in the todos variable
    }           
  },[])

  // can write todos dependency in above but then it will always get also 
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
                        // key,  state variable to be passed in string
  },[todos])


  return (
  <TodoProvider value={{todos, addtodo, deleteTodo, updateTodo, toggleComplete} }>
  <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          {/* Todo form goes here */} 
          <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {/* todos.forEach((todo) => { */}
              {/* // <TodoItem todo={todos}/> */}
            {todos.map((todo)=>(
              <div key={todo.id} className='w-full' >            {/*key for optimisation */}
              <TodoItem todo={todo}/>
              </div>
            ))}
            
            
        </div>
    </div>
  </div>
  </TodoProvider>
  )
}

export default App
