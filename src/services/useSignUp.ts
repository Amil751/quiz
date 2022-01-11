import { useMutation } from "react-query";
import {Http} from '../UTILS/HTTP'
export interface SignUpData{
      name:string,
      surname:string,
      email: string,
      password: string,
}
const fetchQuiz = (data:SignUpData) => {
    return Http.post("/signup", {
      name:data.name,
      surname:data.surname,
      email: data.email,
      password: data.password,
  })
    .then((res) => localStorage.setItem("token", res.data.idToken))
    .catch((err) => console.log(err));
};
export const useSignUp = () => {
  return useMutation(fetchQuiz);
};
