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
//   const {data}=useFetchQuiz(selectValue.category,selectValue.level);
//   const question =data?.data.results;
//   const [questions,setQuestions]=useState<NewData[]>(question)
//   useEffect(()=>{
//     if(data){
//              question.map((question:NewData)=>(
//            {...question,answer:[...question.incorrect_answers,question.correct_answer].sort(() => Math.random() - 0.5)}
//        ));
//        console.log('question',question)
//    }
//    setQuestions(question);
//    },[selectValue])
// console.log(questions);

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
