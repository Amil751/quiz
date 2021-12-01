import { Quiz } from "@mui/icons-material";
import React, { useContext, useState } from "react";

interface ContextProviderPropsType {
  children: React.ReactNode;
}
export interface OnchangeValue{
level: string,
category: string,
name: string,
surname: string,}
interface QuizContext {
  answerIndex: number | undefined;
  setAnswerIndex: (data: number | undefined) => void;
  disable: boolean;
  setDisable: (data: boolean) => void;
  selectValue:OnchangeValue;
  setSelectValue:(data:OnchangeValue)=>void;
  isStart:boolean;
  setIsStart:(data:boolean)=>void
  score:number;
  setScore:(data:number)=>void
}
export const AuthContext = React.createContext<QuizContext>({
  answerIndex: undefined,
  setAnswerIndex: () => {},
  disable: false,
  setDisable: () => {},
  selectValue:{
    level: "",
    category: "",
    name: "",
    surname: "",
  },
  setSelectValue:(data)=>{},
  isStart:true,
  setIsStart:()=>{},
  score:0,
  setScore:()=>{},
});

export const useGlobalData = () => useContext(AuthContext);

export const Provider: React.FC<ContextProviderPropsType> = ({ children }) => {
  const [answerIndex, setAnswerIndex] = useState<number>();
  const [disable, setDisable] = useState(false);
  const [isStart,setIsStart]=useState(true)
  const [score, setScore] = useState(0);
  const [selectValue, setSelectValue] = useState({
    level: "",
    category: "",
    name: "",
    surname: "",
  });
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
        setScore
      }}
    >
      <div>{children}</div>
    </AuthContext.Provider>
  );
};
