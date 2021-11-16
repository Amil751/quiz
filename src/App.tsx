import classes from "./App.module.css";
import { QuizApp } from "./compoents/QuizApp";
import { Provider } from "./Context";
import { useRefactorAnswers } from "./hooks/useRefactorAnswers";
function App() {
  const questions = useRefactorAnswers();
  return (
    <Provider>
      <div className={classes.app}>
        <QuizApp questions={questions} />
      </div>
    </Provider>
  );
}

export default App;
