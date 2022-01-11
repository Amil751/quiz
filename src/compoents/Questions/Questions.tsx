import { Button } from "@mui/material";
import { useGlobalData } from "../../Context";
import { NewData } from "../../types";
import classes from "./Questions.module.css";
import ButtonClose from "../CloseButton/ButtonClose";
import { useEffect, useState } from "react";

type Props = {
  answers: string[] | undefined;
  number: number;
  question: NewData | undefined;
  nextHandler: () => void;
};
const options = ["A", "B", "C", "D"];
export const Questions = ({
  answers,
  number,
  question,
  nextHandler,
}: Props) => {
  const {
    setDisable,
    disable,
    answerIndex,
    setAnswerIndex,
    setScore,
    score,
  } = useGlobalData();
  const [a, setA] = useState<number>(0);

  const variantHandler = (answer: string) => {
    // clearInterval(c);
    if(question){
      setAnswerIndex(question.answer.indexOf(answer));
    }
    
    if (answer === question?.correct_answer) {
      setScore(score + 1);
    }
    setDisable(true);
  };
  const seconds = new Date();
  // setA(seconds.getSeconds());

  const handleSelect = (answer: string, i: number) => {
    if (answerIndex !== 10 && answer === question?.correct_answer) {
      return classes.correct;
    } else if (answer !== question?.correct_answer && i === answerIndex) {
      return classes.wrong;
    }
    console.log('triggered')
  };

  // const [c,setC]=useState<any>(125)
  // useEffect(()=>{
  //   let k=1;
  //   let z=setInterval(()=>{
  //     setA(prev=>prev+1);
  //     k=k+1
  //     console.log(k);
  //     if(k>=15){
  //       clearInterval(z)
  //     }
  //   },1000);
  //   setC(z)

  // },[])
  return (
      <div className="card text-center">
        <div className="card-header">
        <div className={classes.close}>
            <ButtonClose />
          </div>
          <p>Question</p>
          <p>Your score {score}</p>
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            {number + 1}) {question?.question}
          </h5>
          <p className="card-text"></p>
          {answers?.map((answer, index) => (
            <button
              className={`btn btn-info mb-2  ${classes.font} ${handleSelect(
                answer,
                index
              )}`}
              disabled={disable}
              key={index}
              onClick={() => variantHandler(answer)}
              style={{ textTransform: "none" }}
            >
              {options[index]}) {answer}
            </button>
          ))}
        </div>
        <div className="card-footer text-muted">
          <button className="btn btn-secondary" onClick={nextHandler}>
            Next
          </button>
        </div>
      </div>
  );
};
