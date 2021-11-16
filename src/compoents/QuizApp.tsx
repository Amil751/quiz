import { NavigateNext } from "@mui/icons-material";
import { Paper, Button } from "@mui/material";
import { Questions } from "./Questions";
import classes from "../App.module.css";
import { useState } from "react";
import { useRefactorAnswers } from "../hooks/useRefactorAnswers";
import { useGlobalData } from "../Context";
import { NewData } from "../types";
interface Props {
  questions: NewData[] | undefined;
}
export const QuizApp = ({ questions }: Props) => {
  const [number, setNumber] = useState(0);
  const [isStart, setIsStart] = useState(false);
  // const questions = useRefactorAnswers();
  const { setAnswerIndex, setDisable } = useGlobalData();
  console.log(questions);
  const nextHandler = () => {
    setNumber((prev) => prev + 1);
    setAnswerIndex(undefined);
    setDisable(false);
  };
  const startHandler = () => {
    setIsStart(true);
  };

  return (
    <>
      <Paper className={classes.paper}>
        {!isStart && (
          <Button
            variant="outlined"
            className={classes.button}
            onClick={startHandler}
          >
            start
          </Button>
        )}
        {isStart && (
          <>
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
          </>
        )}
      </Paper>
    </>
  );
};
