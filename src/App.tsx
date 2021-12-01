import { useEffect, useState } from "react";
import classes from "./App.module.css";
import HomePage from "./compoents/HomePage/HomePage";
import Navbar from "./compoents/Navbar/Navbar";
import { QuizApp } from "./compoents/QuizApp";
import { useGlobalData } from "./Context";
import { useFetchQuiz } from "./services/useQuiz";
import { NewData } from "./types";

function App() {
  const { isStart } = useGlobalData();
  const [questions, setQuestions] = useState<NewData[]>([]);
  const { selectValue } = useGlobalData();
  const { data} = useFetchQuiz(
    selectValue.category,
    selectValue.level
  );
  const questionsa: NewData[] = data?.data.results;
  useEffect(() => {
   
    if(questionsa)
    questionsa.map((question) =>
      setQuestions((prev) => [
        ...prev,
        {
          ...question,
          answer: [...question.incorrect_answers, question.correct_answer].sort(
            () => Math.random() - 0.5
          ),
        },
      ])
    );
  }, [questionsa]);

  return (
    <div className={classes.app}>
      <Navbar />
      {isStart && <HomePage />}
      {!isStart&&questions.length!==0&&<QuizApp questions={questions} />}
    </div>
  );
}

export default App;
