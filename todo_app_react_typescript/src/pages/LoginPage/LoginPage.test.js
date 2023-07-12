/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import React from "react";
import App from "../../App";
import { Provider } from "react-redux";
import store from "../../store/store";

import {
  BrowserRouter,
  MemoryRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

describe("Login Page test cases", () => {
  // test("on initial render check if email field is present", () => {
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <App />
  //       </BrowserRouter>
  //     </Provider>
  //   );

  //   const email = screen.getByTestId("email");
  //   expect(email).toBeInTheDocument();
  // });

  // test("on initial render check if password field is present", () => {
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <App />
  //       </BrowserRouter>
  //     </Provider>
  //   );

  //   const password = screen.getByTestId("password");
  //   expect(password).toBeInTheDocument();
  // });

  // test("on initial render check if login button is present", () => {
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <App />
  //       </BrowserRouter>
  //     </Provider>
  //   );

  //   const login = screen.getByTestId("login");
  //   expect(login).toBeInTheDocument();
  // });

  test("check if we are able to login", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<Link to="/home">login</Link>} />
            <Route path="/home" element={<p>homepage</p>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    //login clicked
    const login = await screen.findByText("login");
    await user.click(login);

    const homepage = await screen.findByText("homepage");
    expect(homepage).toBeInTheDocument();
  });
});
