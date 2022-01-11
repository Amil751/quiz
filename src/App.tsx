import { useEffect, useState } from "react";
import classes from "./App.module.css";
import HomePage from "./compoents/HomePage/HomePage";
import NavBar from "./compoents/Navbar/Navbar";
import { QuizApp } from "./compoents/QuizApp";
import { useGlobalData } from "./Context";
import { useFetchQuiz } from "./services/useQuiz";
import { NewData } from "./types";
import { Login } from "./compoents/pages/Login";
import { Route, Routes } from "react-router";
import { Profile } from "./compoents/Profile";
import { useTokenRefresher } from "./services/useRefreshToken";
import { ToastProvider } from "react-toast-notifications";
import { Protected } from "./compoents/routes";
import { Download } from "./compoents/pages/Download";
import axios from "axios";
function App() {
  const { isStart } = useGlobalData();
  const [questions, setQuestions] = useState<NewData[]>([]);
  const { selectValue, auth } = useGlobalData();
  const { data } = useFetchQuiz(selectValue.category, selectValue.level);
  const questionsa: NewData[] = data?.data.results;
  useTokenRefresher();
  
  useEffect(() => {
    if (questionsa) {
      setQuestions([]);
      questionsa.map((question) =>
        setQuestions((prev) => [
          ...prev,
          {
            ...question,
            answer: [
              ...question.incorrect_answers,
              question.correct_answer,
            ].sort(() => Math.random() - 0.5),
          },
        ])
      );
    }
  }, [questionsa, data, isStart]);

  return (
    <ToastProvider>
      {auth && <NavBar />}
      <div className={classes.app}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Protected>
                <HomePage />
              </Protected>
            }
          />
          <Route
            path="/questions"
            element={
              <Protected>
                <QuizApp questions={questions} />
              </Protected>
            }
          />
          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route
            path="/download"
            element={
              <Protected>
                <Download />
              </Protected>
            }
          />
        </Routes>
      </div>
    </ToastProvider>
  );
}

export default App;
