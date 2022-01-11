import React from "react";
import classes from "./Result.module.css";
import { useGlobalData } from "../../Context";
import ButtonClose from "../CloseButton/ButtonClose";
interface Props {
  score: number;
}
const Result = () => {
  const { userInf, score } = useGlobalData();

  return (
    <div className={classes.modal}>
      <div className={classes.overlay}>
        <h2 style={{ margin: "10px auto", width: "40%" }}>Quiz finshed</h2>
        <h3>Player: {userInf.name}</h3>
        <h3>Score : {score}</h3>
        <div className={classes.btn}>
          <ButtonClose />
        </div>
        
      </div>
    </div>
  );
};

export default Result;
