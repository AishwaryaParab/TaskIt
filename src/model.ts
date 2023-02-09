// model for every ToDo item

export interface ToDo {
    id: number,
    todo: string,
    isDone: boolean
}


import { useReducer } from "react";

type Actions = 
    {
        type: "add", 
        payload: string
    }  |
    {
        type: "remove", 
        payload: number   //id
    }  |
    {
        type: "done",
        payload: number
    }



// const todoReducer = (state: ToDo[], action: Actions) => {
//     switch(action.type) {
//         case "add":
//             return [
//                 ...state, {id: Date.now(), todo: action.payload, isDone: false} 
//             ]
//         case "remove":
//             return state.filter((todo) => {return todo.id !== action.payload})
//         case "done":
//             return state.map((todo) => {return todo.id == action.payload ? {...todo, isDone: !todo.isDone} : todo});
//         default:
//             return state
//     }

// }

// const Reducer = () => {
//     const [state, dispatch] = useReducer(todoReducer, []);
// }