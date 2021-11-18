import React from "react";
import classes from "./Result.module.css";
import { useGlobalData } from "../../Context";
import { CancelOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
interface Props {
  score: number;
}
const Result = () => {
  const { selectValue,score } = useGlobalData();
  return (
    <div className={classes.modal}>
      <div className={classes.overlay}>
        <h4>{selectValue.name}</h4>
        <h5>your score is {score}</h5>
        <Button className={classes.btn}>
          <CancelOutlined style={{color:'red'}}/>
        </Button>
      </div>
    </div>
  );
};

export default Result;
