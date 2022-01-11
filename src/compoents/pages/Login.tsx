import { useState } from "react";
import React from "react";
import { Data, useLogin } from "../../services/useLogin";
import classes from "./Login.module.css";
import { useNavigate } from "react-router";
import { useGlobalData } from "../../Context";
import { SignUp } from "./SignUp";
import jwtDecode from "jwt-decode";

export const Login = () => {
  const [enteredData, setEnteredData] = useState<Data>({
    email: "",
    password: "",
  });
  const [type, setType] = useState(true);
  const {
    auth,
    setAuth,
    setUserInf,
    setRefreshToken,
    refreshToken,
  } = useGlobalData();

  const navigate = useNavigate();
  const { mutate } = useLogin();
  // const token = localStorage.getItem("token");
  // if (token) {
  //   const decode = jwtDecode(token);
  //   console.log(decode)
  // }
  const submitHandler = (e: any) => {
    e.preventDefault();
    mutate(enteredData, {
      onSuccess(res) {
        setUserInf({ name: res.data.name, surname: res.data.surname });
        console.log("mutate", res);
        if (res.data.accessToken) {
          localStorage.setItem("token", res.data.accessToken);
          setRefreshToken(res.data.refreshToken);
          navigate("/", { replace: true });
          setAuth(true)
        }
      },
    });
  };
  if (auth) {
    navigate("/", { replace: true });
  }
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setEnteredData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
         <h4 className="mb-5">QuizApp</h4>
      {type ? (
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onChangeHandler}
              name="email"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={onChangeHandler}
              name="password"
            />
          </div>
          <div className="mb-3 form-check"></div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <p
            className="mb-3 text-secondary border-bottom"
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
