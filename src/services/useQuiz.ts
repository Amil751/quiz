import axios from "axios";
import { useQuery } from "react-query";
import {Http} from '../UTILS/HTTP'
enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}


const fetchQuestions = (category:string,level:string) => {
  if(category!=='')
  return axios.get(
    `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level.toLowerCase()}&type=multiple`);
};
export const useFetchQuiz = (category:string,level:string) => {
  
  return useQuery(["questions",category], ()=>fetchQuestions(category,level),{ refetchOnWindowFocus: false ,staleTime:1000});
};
