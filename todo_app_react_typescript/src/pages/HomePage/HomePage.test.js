/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import React from "react";
import { Provider } from "react-redux";
import store from "../../store/store";

import { MemoryRouter, Routes, Route, Link } from "react-router-dom";

describe("Home Page test cases", () => {
  test("check if we are able to logout", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/home"]}>
          <Routes>
            <Route path="/home" element={<Link to="/">logout</Link>} />
            <Route path="/" element={<p>loginpage</p>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    //logout clicked
    const logout = await screen.findByText("logout");
    await user.click(logout);

    const loginpage = await screen.findByText("loginpage");
    expect(loginpage).toBeInTheDocument();
  });
});
