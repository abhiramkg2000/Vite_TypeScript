import React, { ChangeEvent, FormEvent, useEffect } from "react";
import "./Form.css";

import Button from "../ui/Button/Button";
import TextField from "../ui/TextField/TextField";
import PasswordField from "../ui/PasswordField/PasswordField";
import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import {useAppDispatch,useAppSelector} from "../../store/hooks"

import {getLoginCredentials, handleLoginData} from "../../store/features/loginDataSlice/loginDataSlice";
import { login,logout } from "../../store/features/loginSlice/loginSlice";

function Form() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userData = useAppSelector((state) => state.loginData.loginData);
  const loginCredentials=useAppSelector((state)=>state.loginData.loginCredentials);

  useEffect(()=>{
    dispatch(getLoginCredentials());
    dispatch(logout());
    // console.log("loginCredentials",loginCredentials);
  },[])

  const checkValidity = (e:ChangeEvent<HTMLInputElement>) => {
    const element = e.target;
    const { name, value } = element;

    /* istanbul ignore if */
    if (name === "email") {
      if (value === "") {
        element.setCustomValidity("Email cannot be empty");
      } else if (!value.includes("@")) {
        element.setCustomValidity("Email should have @ character");
      } else {
        element.setCustomValidity("");
      }
    }

    /* istanbul ignore if */
    if (name === "password") {
      if (value === "") {
        element.setCustomValidity("password cannot be empty");
      } else if (value.length < 4) {
        element.setCustomValidity("password should have minimum 4 characters");
      } else {
        element.setCustomValidity("");
      }
    }
  };

  const handleFormChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    checkValidity(e);
    // console.log("formdata",name," ",value);
    dispatch(handleLoginData([name, value]));
    // console.log("userData",userData);
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(userData.email===loginCredentials.email&& userData.password===loginCredentials.password)
    {
      dispatch(login());
      navigate("/home");
      // dispatch(handleLoginData(["email",""]));
      // dispatch(handleLoginData(["password",""]));
    }
  };

  return (
    <form data-testid="form" onSubmit={handleSubmit} className={"form"}>
      <div>
        <h2 className="form-title">User Login</h2>
      </div>
      <div className="user-input">
        <div className={"email"}>
          <TextField
            name="email"
            id="email"
            value={userData.email}
            handleFormChange={handleFormChange}
            checkValidity={checkValidity}
          />
        </div>
        <div className={"password"}>
          <PasswordField
            name="password"
            id="password"
            value={userData.password}
            handleFormChange={handleFormChange}
            checkValidity={checkValidity}
          />
        </div>
      </div>
      <div className={"btn"}>
        <Button testid="login">Login</Button>
      </div>
    </form>
  );
}

export default Form;
