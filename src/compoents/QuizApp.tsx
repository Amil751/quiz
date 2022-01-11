import { NavigateNext } from "@mui/icons-material";
import { Paper, Button } from "@mui/material";
import { Questions } from "./Questions/Questions";
import classes from "../App.module.css";
import { useEffect, useState } from "react";
import { useGlobalData } from "../Context";
import { NewData } from "../types";
import Result from "./modal/Result";
interface Props {
  questions: NewData[] | undefined;
}
export const QuizApp = ({ questions }: Props) => {
  const [number, setNumber] = useState(0);
  const [question,setQuestion]=useState<NewData>()
  const [isShow, setIsShow] = useState(false);
  const { setAnswerIndex, setDisable } = useGlobalData();
  const nextHandler = () => {
    if (number < 9) {
      setNumber((prev) => prev + 1);
    } else {
      setIsShow(true);
    }

    setAnswerIndex(10);
    setDisable(false);
  };
  useEffect(()=>{
    if(questions?.length!==0&&questions){
      setQuestion(questions[number])
    }
  },[questions,number])
 
console.log(questions)
  return (
    <>
      <Paper className={classes.paper}>
        <div
          
        >
          {question&&<Questions
            number={number}
            question={question}
            answers={question.answer}
            nextHandler={nextHandler}
          />}
        </div>
      </Paper>
      {isShow && <Result />}
    </>
  );
};
