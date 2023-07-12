import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Completed from "./pages/Completed/Completed";
import Pending from "./pages/Pending/Pending";
import RouteNavbar from "./layouts/RouteNavbar/RouteNavbar";
import Protected from "./pages/Protected/Protected";

// import Img from "./test.jpg";

// import { useDispatch, useSelector } from "react-redux";
import {useAppDispatch,useAppSelector} from "./store/hooks"
import { getTodoList } from "./store/features/todosSlice/todosSlice";

function App() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);

  //   /* istanbul ignore if */

  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<RouteNavbar />}>
          <Route
            index
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <HomePage />
              </Protected>
            }
          />
          <Route
            path="completed"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Completed />
              </Protected>
            }
          />
          <Route
            path="pending"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Pending />
              </Protected>
            }
          />
        </Route>
        <Route path="*" element={<LoginPage />} />
      </Routes>
      {/* <img src={Img} alt="not" width="600" height="400"/> */}
    </div>
  );
}

export default App;
// element={
//   <Protected isLoggedIn={isLoggedIn}>
//     <HomePage />
//   </Protected>
// }

// element={<HomePage/>}
