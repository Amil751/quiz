import axios from "axios";
import { useQuery } from "react-query";
enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
const fetchQuestions = () => {
  return axios.get(
    "https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple");
};
export const useFetchQuiz = () => {
  return useQuery("questions", fetchQuestions,{ refetchOnWindowFocus: false });
};
