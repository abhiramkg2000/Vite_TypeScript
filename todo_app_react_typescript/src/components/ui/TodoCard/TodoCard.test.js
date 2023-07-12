/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import React from "react";

import { Provider } from "react-redux";
import store from "../../../store/store";
import HomePage from "../../../pages/HomePage/HomePage";
import Completed from "../../../pages/Completed/Completed";
import { Link, MemoryRouter, Routes, Route } from "react-router-dom";
import Pending from "../../../pages/Pending/Pending";

describe("Todo Card test cases", () => {
  test("check if we are able to add todos", async () => {
    render(
      // <Provider store={store}>
      //   <HomePage />
      // </Provider>
      <Provider store={store}>
        <MemoryRouter
          initialEntries={["/home", "/home/pending"]}
          initialIndex={0}
        >
          <Routes>
            <Route
              path="/home"
              element={
                <>
                  <HomePage />
                  <Link to="/home/pending">pending</Link>
                </>
              }
            />
            <Route path="/home/pending" element={<Pending />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    //To add todos
    const inputTodo = await screen.findByTestId("inputTodo");
    await user.type(inputTodo, "task4");
    expect(inputTodo).toHaveValue("task4");

    const addTodo = await screen.findByTestId("addTodo");
    await user.click(addTodo);

    const todoCard = await screen.findByTestId("todoCard");
    expect(todoCard).toBeInTheDocument();

    //To change to "/home/pending" Route to view uncompleted todos
    const pending = await screen.findByText("pending");
    await user.click(pending);

    const editTodo = await screen.findByTestId("editTodo");
    expect(editTodo).toBeInTheDocument();
  });

  test("check if we are able to edit todos", async () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    //To edit todos
    const editTodo = await screen.findByTestId("editTodo");
    await user.clear(editTodo);
    await user.type(editTodo, "task5");
    expect(editTodo).toHaveValue("task5");
  });

  test("check if we are able to mark todos as complete", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={["/home", "/home/completed"]}
          initialIndex={0}
        >
          <Routes>
            <Route
              path="/home"
              element={
                <>
                  <HomePage />
                  <Link to="/home/completed">completed</Link>
                </>
              }
            />
            <Route path="/home/completed" element={<Completed />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    //To mark todos as complete
    const todoComplete = await screen.findByTestId("todoComplete");
    await user.click(todoComplete);

    //To change to "/home/completed" Route to view completed todos
    const completed = await screen.findByText("completed");
    await user.click(completed);

    const editTodo = await screen.findByTestId("editTodo");
    expect(editTodo).toBeInTheDocument();
  });

  test("check if we are able to delete todos", async () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    //To delete todos
    const todoDelete = await screen.findByTestId("todoDelete");
    await user.click(todoDelete);

    const todoCard = screen.queryByTestId("todoCard");
    expect(todoCard).not.toBeInTheDocument();
  });
});
