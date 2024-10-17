import { createContext,useContext } from "react";


export const pankaj = createContext({
    // properties
   Todos:[
    {
        id:1,
        title:"Todo mesg",
        checked:false,
    } 
   ],

    // method
     AddTodo:(Todo)=>{},
     UpdateTodo:(id,Todo)=>{},
     DeleteTodo:(id)=>{},
     toggleTodo:(id)=>{},

});

export const  Usepankaj=()=>{
    return useContext(pankaj)
} 

export const PankajProvider = pankaj.Provider;