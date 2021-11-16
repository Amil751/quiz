import { Quiz } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { useRefactorAnswers } from "../hooks/useRefactorAnswers";
import { NewData } from "../types";
interface ContextProviderPropsType {
  children: React.ReactNode;
}
interface QuizContext {
  answerIndex: number | undefined;
  setAnswerIndex: (data: number | undefined) => void;
  disable: boolean;
  setDisable: (data: boolean) => void;
  questions: NewData[] | undefined;
}
const AuthContext = React.createContext<QuizContext>({
  answerIndex: undefined,
  setAnswerIndex: () => {},
  disable: false,
  setDisable: () => {},
  questions: [],
});

export const useGlobalData = () => useContext(AuthContext);

export const Provider: React.FC<ContextProviderPropsType> = ({ children }) => {
  const [answerIndex, setAnswerIndex] = useState<number>();
  const [disable, setDisable] = useState(false);
  const questions = useRefactorAnswers();
  return (
    <AuthContext.Provider
      value={{
        answerIndex,
        setAnswerIndex,
        disable,
        setDisable,
        questions,
      }}
    >
      <div>{children}</div>
    </AuthContext.Provider>
  );
};
