import { useState } from "react";
import React from "react";
import { Data, useLogin } from "../../services/useLogin";
import classes from "./Login.module.css";
import { useNavigate } from "react-router";
import { getUserData } from "../../services/getUserData";
import { useGlobalData } from "../../Context";
import { SignUp } from "./SignUp";
import jwtDecode from "jwt-decode";

export const Login = () => {
  const [enteredData, setEnteredData] = useState<Data>({
    email: "",
    password: "",
  });
  const [type, setType] = useState(true);
  const { auth, setAuth, setUserInf, setRefreshToken } = useGlobalData();
  const navigate = useNavigate();
  const { mutate } = useLogin();
  // const token = localStorage.getItem("token");
  // if (token) {
  //   const decode = jwtDecode(token);
  //   console.log(decode)
  // }
  const clickHandler = (e: any) => {
    e.preventDefault();
    mutate(enteredData, {
      onSuccess(res) {
        localStorage.setItem("token", res.accessToken);
        setUserInf({ name: res.name, surname: res.surname });
        console.log("mutate", res);
        if (res.accessToken) {
          setAuth(true);
          setRefreshToken(res.refreshTokens[0]);
        }
      },
    });
  };
  console.log(auth);
  if (auth) {
    navigate("/", { replace: true });
  }
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setEnteredData((prev) => ({ ...prev, [name]: value }));
  };
  getUserData();
  return (
    <>
      {type ? (
        <form className={classes.formcontrol}>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={onChangeHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={onChangeHandler}
          />
          <button type="submit" onClick={clickHandler}>
            Login
          </button>
          <p
            onClick={() => setType((type) => !type)}
            style={{ margin: "5px auto", color: "white" }}
          >
            {type ? "Create new account" : "Sign in"}
          </p>
        </form>
      ) : (
        <SignUp type={type} setType={setType} />
      )}
    </>
  );
};
