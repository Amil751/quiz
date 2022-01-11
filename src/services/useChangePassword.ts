import { useMutation } from "react-query";
import {Http} from '../UTILS/HTTP'

const fetchQuiz = (data: string) =>
  Http.put("/profile/reset", {
      password: data,
  })
export const useChangePassword = () => {
  return useMutation(fetchQuiz);
};
