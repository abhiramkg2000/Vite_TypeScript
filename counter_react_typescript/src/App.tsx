import "./App.css";
import AddButton from "./components/AddButton/AddButton";
import SubButton from "./components/SubButton/SubButton";
import { useContext, useEffect, useState } from "react";
import { CounterContext, TodoType } from "./context/CounterProvider";

function App() {
  const { count, increment, decrement, fetchTodos } =
    useContext(CounterContext);

  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = () => {
    fetchTodos().then((data) => setTodos(data));
  };

  return (
    <div className="App">
      <div className="card">
        <h2>Count is {count}</h2>
        <AddButton increment={increment}>+</AddButton>
        <SubButton decrement={decrement}>-</SubButton>
        <button onClick={getTodos}>api</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
