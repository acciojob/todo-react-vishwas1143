import React, { useState } from "react";
import "./../styles/App.css";
import Input from "./Input";

const App = () => {
  const [todo, setTodo] = useState([]);
  const handleDelete = (e) => {
    setTodo((prev) => {
      return prev.filter((ele) => {
        return e !== ele;
      });
    });
  };

  return (
    <div>
      <Input setTodo={setTodo} />
      {todo.map((e) => {
        return (
          <div key={e} style={{ display: "flex" }}>
            <p>{e}</p>
            <button onClick={() => handleDelete(e)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
