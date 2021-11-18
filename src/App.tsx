import { useCallback, useEffect, useState } from "react";
import classes from "./App.module.css";
import HomePage from "./compoents/HomePage/HomePage";
import { QuizApp } from "./compoents/QuizApp";
import { useGlobalData } from "./Context";
import { useRefactorAnswers } from "./hooks/useRefactorAnswers";
import { useFetchQuiz } from "./services/useQuiz";
import { NewData } from "./types";


function App() {
  const { isStart ,selectValue} = useGlobalData();
  const questions= useRefactorAnswers(selectValue.category,selectValue.level);
  console.log('app rendered')
  return (
   
      <div className={classes.app}>
        {isStart ? (
          <HomePage />
        ) : (
          <QuizApp questions={questions} />
        )}
      </div>

  );
}

export default App;
