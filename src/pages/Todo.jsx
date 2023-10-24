import { useState, useRef, useEffect } from "react";
import ListItem from "../components/ListItem";
import { v4 as uuidv4 } from "uuid";
import { data } from "autoprefixer";

function Todo() {
  // usestate -> {state, setstate}
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

//DependencyList is null exec
//useEffect(() =>{
  //  console.log("useEffect");
//} ,[])

//without DependencyList exec aech time state changes
//useEffect(() =>{
  //  console.log("useEffect");
//} ,)

useEffect(() =>{
   const getTodos = () =>{
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=> response.json()).then((data) => {
        console.log(data);
    });
   }
} ,[])

  // Add a new todo
  const addTodo = () => {
    const todoValue = inputRef.current.value;
    const newTodo = { name: todoValue, id: uuidv4()}
    console.log("before", todos);
    setTodos([...todos, newTodo]);
    console.log("after", todos)
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    // delete todo by id
    // filter items different to given id
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          className="rounded-md bg-[#444] p-2"
        />
        <button
          onClick={addTodo}
          className="rounded-md bg-indigo-600 px-4 py-2"
        >
          Add ToDo
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {todos.map((item) => {
          return (
            <ListItem
              key={item.id}
              text={item.name}
              onDelete={() => deleteTodo(item.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;