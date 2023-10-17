import React, { useState, useRef } from "react";
import ListItem from "../components/ListItem";

function Todo() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const addTodo = () => {
    const todoValue = inputRef.current.value;
    if (todoValue) {
      setTodos([...todos, todoValue]);
      inputRef.current.value = ""; // Clear input field after adding a todo
    }
  };

  const handleDelete = (todoText) => {
    setTodos(todos.filter((todo) => todo !== todoText));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input ref={inputRef} type="text" className="rounded-md bg-slate-400" />
        <button onClick={addTodo} className="rounded-md bg-indigo-600 px-4 py-2">
          Add
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {todos.map((value, index) => {
          return <ListItem key={index} text={value} onDelete={handleDelete} />;
        })}
      </ul>
    </div>
  );
}

export default Todo;
