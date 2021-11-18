import { useGlobalData } from "../Context";
import { useFetchQuiz } from "../services/useQuiz";
import { NewData} from "../types"

export const useRefactorAnswers=(category:string,level:string)=>{
    
   const{data,isSuccess}=useFetchQuiz(category,level);
    if(data){
         const questions:NewData[]=data?.data.results
        return  questions.map((question)=>(
            {...question,answer:[...question.incorrect_answers,question.correct_answer].sort(() => Math.random() - 0.5)}
        ));
    }
}