import React from "react";
import "./HomePage.css";

import TodosList from "../../components/ui/TodosList/TodosList";
import InputTodo from "../../components/ui/InputTodo/InputTodo";
// import { useDispatch } from "react-redux";

function HomePage() {
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(getLoginCredentials());
  // })

  return (
    <div className="home-page" data-testid="homepage">
      <h2>Add Todos</h2>
      <InputTodo />
      <div className="todos-container">
        <TodosList />
      </div>
    </div>
  );
}

export default HomePage;
