import { useMutation } from "react-query"
import {Http} from '../UTILS/HTTP'
export interface Data{
    email:string,
    password:string
}
const fetchQuiz=(data:Data)=>(
           Http.post('/login',{
            email:data.email,
            password:data.password,
        })
)

export const useLogin=()=>{
    return useMutation(fetchQuiz)
}