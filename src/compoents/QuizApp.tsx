import { NavigateNext } from "@mui/icons-material";
import { Paper, Button } from "@mui/material";
import { Questions } from "./Questions/Questions";
import classes from "../App.module.css";
import { useState } from "react";
import { useGlobalData } from "../Context";
import { NewData } from "../types";
import Result from "./modal/Result";
interface Props {
  questions: NewData[] | undefined;
}
export const QuizApp = ({ questions }: Props) => {
  const [number, setNumber] = useState(0);
  const [isShow,setIsShow]=useState(false);
  const { setAnswerIndex, setDisable } = useGlobalData();
  const nextHandler = () => {
    if(number<9){
      setNumber((prev) => prev + 1);
    }else{
      setIsShow(true)
    }
    
    setAnswerIndex(undefined);
    setDisable(false);
  };

  return (
    <>
     <Paper className={classes.paper}>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Questions
            answers={questions && questions[number].answer}
            number={number}
            question={questions && questions[number]}
          />
        </div>
        <Button onClick={nextHandler}>
          next
          <NavigateNext />
        </Button>
      </Paper>:
     { isShow && <Result/>}
    </>
  );
};
