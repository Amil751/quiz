import { useMutation } from "react-query";
import {Http} from '../UTILS/HTTP'
const fetchQuiz = (data: string) =>
  Http.post("/refresh", {
      token: data,
  })
export const useTokenRefresher = () => {
  return useMutation(fetchQuiz);
  // const { refreshToken } = useGlobalData();
  // const { mutate } = useMutation(fetchQuiz);

  // useEffect(() => {
  //   mutate(refreshToken, {
  //     onSuccess: (res) => {
  //       console.log(res);
  //     },
  //   });
  //   console.log(refreshToken);
  // }, [refreshToken]);
};
