import React, { useContext, useState } from "react";

interface ContextProviderPropsType {
  children: React.ReactNode;
}
export interface OnchangeValue {
  level: string;
  category: string;
}
interface User {
  name: string;
  surname: string;
}
interface QuizContext {
  answerIndex: number;
  setAnswerIndex: (data: number) => void;
  disable: boolean;
  setDisable: (data: boolean) => void;
  selectValue: OnchangeValue;
  setSelectValue: (data: OnchangeValue) => void;
  isStart: boolean;
  setIsStart: (data: boolean) => void;
  score: number;
  setScore: (data: number) => void;
  auth: boolean;
  setAuth: (data: boolean) => void;
  userInf: User;
  setUserInf: (data: User) => void;
  refreshToken: string;
  setRefreshToken: (data: string) => void;
}
export const AuthContext = React.createContext<QuizContext>({
  answerIndex:10,
  setAnswerIndex: () => {},
  disable: false,
  setDisable: () => {},
  selectValue: {
    level: "",
    category: "",
  },
  setSelectValue: (data) => {},
  isStart: true,
  setIsStart: () => {},
  score: 0,
  setScore: () => {},
  auth: false,
  setAuth: () => {},
  userInf: { name: "", surname: "" },
  setUserInf: () => {},
  refreshToken: "",
  setRefreshToken: () => {},
});

export const useGlobalData = () => useContext(AuthContext);

export const Provider: React.FC<ContextProviderPropsType> = ({ children }) => {
  const [answerIndex, setAnswerIndex] = useState<number>(10);
  const [disable, setDisable] = useState(false);
  const [isStart, setIsStart] = useState(true);
  const [score, setScore] = useState(0);
  const [auth, setAuth] = useState(!!localStorage.getItem("token"));
  const [refreshToken, setRefreshToken] = useState("");
  const [selectValue, setSelectValue] = useState({
    level: "",
    category: "",
  });
  const [userInf, setUserInf] = useState({ name: "", surname: "" });
  return (
    <AuthContext.Provider
      value={{
        answerIndex,
        setAnswerIndex,
        disable,
        setDisable,
        selectValue,
        setSelectValue,
        isStart,
        setIsStart,
        score,
        setScore,
        auth,
        setAuth,
        userInf,
        setUserInf,
        refreshToken,
        setRefreshToken,
      }}
    >
      <div>{children}</div>
    </AuthContext.Provider>
  );
};
