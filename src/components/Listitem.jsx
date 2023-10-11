import { useState } from "react";

function ListItem({text, onDelete, }) {
    const [checked, setChecked] = useState(false);
    const handleCheck = () => {
        setChecked(!checked);
    }
    return (
    <li className={`rounded-md bg-indigo-800 p-2 ${checked ? 'text-green-500 line-through' : null}`}>{text} <input type="checkbox" checked={checked} onChange={handleCheck} />
    </li>
    );
}

export default ListItem