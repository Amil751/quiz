import React, { useState } from "react";
import useStyles from "./styles";
import classes from "./Login.module.css";
import { SignUpData, useSignUp } from "../../services/useSignUp";
import { Data } from "../../services/useLogin";
import { useUser } from "../../services/useUsers";
import { useNavigate } from "react-router";
interface SignUpProps {
  type: boolean;
  setType: (data: boolean) => void;
}
export const SignUp = (props: SignUpProps) => {
  const { type, setType } = props;
  const navigate = useNavigate();
  const [enteredData, setEnteredData] = useState<SignUpData>({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  useUser();
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setEnteredData((prev) => ({ ...prev, [name]: value }));
  };
  const { mutate, isSuccess } = useSignUp();
  const submitHandler = (e: any) => {
    e.preventDefault();
    mutate(enteredData);
    if (isSuccess) {
      setType(true);
    }
  };

  return (
    <>
      {/* <form className={classes.formcontrol}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={onChangeHandler}
        />
        <label htmlFor="surname">Surname</label>
        <input
          name="surname"
          placeholder="Surname"
          onChange={onChangeHandler}
        />
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
        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
        <p onClick={()=>setType(!type)} style={{margin:"5px auto",color:'white'}}>{type?"Create new account":"Sign in"}</p>
      </form> */}
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="nameHelp"
            onChange={onChangeHandler}
          />
          <label htmlFor="surname" className="form-label">
            Surname
          </label>
          <input
            type="text"
            className="form-control"
            id="surname"
            aria-describedby="surnameHelp"
            name="surname"
            onChange={onChangeHandler}
          />
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={onChangeHandler}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChangeHandler}
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p
          className="mb-3 text-info border-bottom"
          onClick={() => setType(!type)}
          style={{ margin: "5px auto", color: "white" }}
        >
          {type ? "Create new account" : "Sign in"}
        </p>
      </form>
    </>
  );
};
