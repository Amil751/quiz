import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider, QueryClient} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from "./Context";
const queryClient=new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider>
    <App />
    </Provider>
    <ReactQueryDevtools/>
  </QueryClientProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
