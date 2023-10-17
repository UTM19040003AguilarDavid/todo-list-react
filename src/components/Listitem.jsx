import React, { useState } from "react";

function ListItem({ text, onDelete }) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleDelete = () => {
    onDelete(text);
  };

  return (
    <li className={`flex items-center rounded-md bg-indigo-800 p-2 ${checked ? 'text-green-500 line-through' : null}`}>
      <input type="checkbox" checked={checked} onChange={handleCheck} />
      <span className="flex-grow">{text}</span>
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
    </li>
  );
}

export default ListItem;
