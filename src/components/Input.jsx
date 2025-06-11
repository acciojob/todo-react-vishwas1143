import React, { useState } from "react";

function Input({ setTodo }) {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }
    setTodo((p) => [input, ...p]);
    setInput("");
  };
  return (
    <div>
      <h1>Todo-List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
}

export default Input;
