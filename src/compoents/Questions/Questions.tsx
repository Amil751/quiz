import { Button } from "@mui/material";
import { useGlobalData } from "../../Context";
import { NewData } from "../../types";
import classes from "./Questions.module.css";
import ButtonClose from "../Buttons/ButtonClose";

type Props = {
  answers: string[] | undefined;
  number: number;
  question: NewData | undefined;
};
const options = ["A", "B", "C", "D"];
export const Questions = ({ answers, number, question }: Props) => {
  const { setDisable, disable, answerIndex, setAnswerIndex ,setScore,score} = useGlobalData();
  

  const variantHandler = (answer: string) => {
    setAnswerIndex(question?.answer.indexOf(answer));
    if (answer === question?.correct_answer) {
      setScore(score + 1);
    }
    setDisable(true);
  };

  const handleSelect = (answer: string, i: number) => {
    if (answerIndex !== undefined && answer === question?.correct_answer) {
      return classes.correct;
    } else if (answer !== question?.correct_answer && i === answerIndex) {
      return classes.wrong;
    }
  };
  console.log('amil');
  return (
    <>
    <div className={classes.question}>
      <h3>{number + 1}/10</h3>
      <h3 style={{ position: "absolute", right: "60px" }}>Your score {score}</h3>
      <p>
        {number + 1}) {question?.question}
      </p>
        {answers?.map((answer, index) => (
          <Button
            className={`${classes.font} ${handleSelect(answer, index)}`}
            disabled={disable}
            key={index}
            onClick={() => variantHandler(answer)}
            style={{ textTransform: "none" }}
          >
            {options[index]}) {answer}
          </Button>
        ))}
        <div className={classes.btn}>
          <ButtonClose />
        </div>
        </div>
    </>
  );
};
