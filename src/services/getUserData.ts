import {Http} from '../UTILS/HTTP'
const fetchUsers = () => {
  Http.get("https://quiz-94cc7-default-rtdb.firebaseio.com/quiz.json")
    .then((res) =>res)
    .catch((err) => console.log(err));
};
export const getUserData = () => {
  return fetchUsers();
};
