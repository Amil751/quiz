import { useFetchQuiz } from "../services/useQuiz";
import { NewData} from "../types"

export const useRefactorAnswers=()=>{
   const{data,isSuccess}=useFetchQuiz();
    if(isSuccess){
         const questions:NewData[]=data?.data.results
        return  questions.map((question)=>(
            {...question,answer:[...question.incorrect_answers,question.correct_answer].sort(() => Math.random() - 0.5)}
        ));
    }
}