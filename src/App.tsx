import React, {useEffect, useState} from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Inspo from "./components/Inspo";
import InputField from "./components/InputField";
import { ToDo } from "./model";
import ToDoList from "./components/ToDoList";
import axios from 'axios';
import { Category } from "@mui/icons-material";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ToDo[]>([]);

  const [quote, setQuote] = useState<string>("");

  const fetchQuote = async () => {
    const category: string = 'inspirational';
    const url = 'https://api.api-ninjas.com/v1/quotes?category=' + category;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: { 'X-Api-Key': 'PpNRFzT56pVZDcAR1Ko7pA==zHPmmJCgCoydRPfY'}
      })

      const data = await response.json();
      // console.log(data)

      setQuote(data[0].quote)
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
      setTodo(""); // emptying the input field
    }
    
  }

  return (
    <div className="App">
        <Navbar />
        <div className="home">
          <Inspo dailyQuote={quote} />
          <div>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <ToDoList todos={todos} setTodos={setTodos} />
          </div>
        </div>
    </div>
  )
}

export default App
