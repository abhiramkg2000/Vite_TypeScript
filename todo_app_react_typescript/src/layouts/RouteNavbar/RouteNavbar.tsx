import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { useAppSelector,useAppDispatch } from "../../store/hooks";

import "./RouteNavbar.css";
import UserProfile from "../../components/ui/UserProfile/UserProfile";
import { getLoginCredentials } from "../../store/features/loginDataSlice/loginDataSlice";

function RouteNavbar() {
  const dispatch = useAppDispatch();
  const [iconClick, setIconClick] = useState(false);

  const todos = useAppSelector((state) => state.todos.todos) ?? 0;
  const completedTodos = todos
    ? todos.filter((todo) => todo.complete === true)
    : 0;
  const pendingTodos = todos
    ? todos.filter((todo) => todo.complete !== true)
    : 0;

  useEffect(() => {
    dispatch(getLoginCredentials());
  });

  return (
    <>
      <nav>
        <h2>Welcome</h2>
        <div className="link-container">
          <Link className="link" to="/home">
            Todos page {todos.length}
          </Link>
          <Link className="link" to="/home/completed">
            Completed Todos {completedTodos&&completedTodos.length}
          </Link>
          <Link className="link" to="/home/pending">
            Pending Todos {pendingTodos&&pendingTodos.length}
          </Link>
        </div>
        <div className="user_profile">
          <div
            className="user-icon"
            onClick={() => setIconClick((iconClick) => !iconClick)}
          >
            <i className="fa-solid fa-user"></i>
          </div>
          <UserProfile click={iconClick} />
          {/* <Link className={"link logout "+(iconClick?"show":"hide")} to="/">Logout</Link> */}
        </div>
        {/* <Link className="link logout" to="/"></Link> */}
      </nav>
      <Outlet />
    </>
  );
}

export default RouteNavbar;
