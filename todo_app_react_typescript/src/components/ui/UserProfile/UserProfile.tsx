import React from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";
// import { useSelector,useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";

import { handleLoginData } from "../../../store/features/loginDataSlice/loginDataSlice";

type UserProfileProps = {
  click: boolean;
};

function UserProfile({ click }: UserProfileProps) {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.loginData.loginCredentials);
  return (
    <div className={"logout_container" + (click ? " show" : " hide")}>
      <p>{userName.email}</p>
      <Link
        className="link logout"
        to="/"
        data-testid="logout"
        onClick={() => dispatch(handleLoginData(["", ""]))}
      >
        Logout
      </Link>
    </div>
  );
}

export default UserProfile;
