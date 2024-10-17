 
import { useEffect, useState } from 'react'
import './App.css'
import { PankajProvider } from './contexts/TodoContext'; 
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {
  const[Todos,setTodo]=useState([]);

 const AddTodo=(Todo)=>{
    setTodo((prev)=>[{id: Date.now() ,...Todo},...prev])
 }
 const UpdateTodo =(id,Todo)=>{
  setTodo((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? Todo : prevTodo))
 }
 const  DeleteTodo =(id)=>{
  setTodo((prev)=>prev.filter((prevTodo)=>prevTodo.id !== id))
 }
 const toggleTodo =(id)=>{
 
  setTodo((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo,
    checked :!prevTodo.checked }:prevTodo ))
    //  console.log(id)
 }

  useEffect(() => { 
      const pratap = JSON.parse(localStorage.getItem("todos"));
   if(pratap && pratap.length >0){
    setTodo(pratap)
   }
  }, [ ])
  
  useEffect(() => {
      localStorage.setItem("todos" ,JSON.stringify(Todos))  
   
   }, [ Todos])

  return (
    <PankajProvider  value={{Todos, AddTodo,  UpdateTodo, DeleteTodo ,  toggleTodo }}>
        <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {Todos.map((Todo) => (
                          <div key={Todo.id}
                          className='w-full'
                          >
                            <TodoItem Todo={Todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
 
    </PankajProvider>
  )
}

export default App

