import { useState } from "react";
import React from "react";
import classes from "../compoents/pages/Login.module.css";
import { useChangePassword } from "../services/useChangePassword";
import { useToasts } from "react-toast-notifications";
export const Profile = () => {
  const { addToast } = useToasts();
  const [password, setPassword] = useState({
    email: "",
    old_password: "",
    new_password: "",
  });
 
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setPassword((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const { mutate } = useChangePassword();
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (password.old_password === password.new_password) {
      mutate(password.new_password, {
        onSuccess: () => {
          addToast("your password has been changed", { appearance: "success" });
        },
        onError: () => {
          addToast("somesthing went wrong", { appearance: "error" });
        },
      });
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Set new password
        </label>
        <input
          type="Password"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={onChangeHandler}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Confirm password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={onChangeHandler}
        />
      </div>
      <div className="mb-3 form-check"></div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
