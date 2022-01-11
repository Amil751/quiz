import { Http } from "../UTILS/HTTP"

const fetchUsers=()=>{
    Http.post('https://quiz-94cc7-default-rtdb.firebaseio.com/quiz.json',{
          firstName: 'Fred',
          lastName: 'Flintstone'
      }).catch(err=>console.log(err))
}
export const useUser=()=>{
    return fetchUsers()
}