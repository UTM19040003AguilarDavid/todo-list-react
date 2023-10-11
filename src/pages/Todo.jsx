import ListItem from "../components/Listitem";
import { useState, useRef } from "react";



function Todo() {
    //useState nos devuelve un Array -->
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const addTodo = () => {
        const todoValue = inputRef.current.value;
        console.log(todoValue);
        setTodos([...todos, todoValue])
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
            <input ref={inputRef} type="text" className="rounded-md bg-slate-400" />
            <button onClick={addTodo} className="rounded-md bg-indigo-600 px-4 py-2">add</button>
            </div>
            <ul className="flex flex-col gap-2">
                {
                    todos.map((value, index) => {
                        return <ListItem key={index} text={value} />;
                    }
                )}
            </ul>
        </div>
    );
}

export default Todo;