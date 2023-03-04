import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllQuestions,
  nextPage,
  prevPage,
  goToQuestion,
  checkAnswer,
} from "../features/mockTests/mockTestsSlice";
import "./Questions.css";

const Questions = () => {
  const { questions, questionNumber, isQuestionsLoading } = useSelector(
    (store) => store.mockTests
  );
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllQuestions(id));
  }, [dispatch, id]);

  const getOptionClass = (index, isCorrect) => {
    if (typeof questions[questionNumber].userAnswer !== "undefined") {
      if (isCorrect) {
        return "bg-success";
      }
      if (questions[questionNumber].userAnswer === index && !isCorrect) {
        return "bg-danger";
      }
    }
    return "";
  };

  if (isQuestionsLoading) {
    return <p>Loading..</p>;
  }

  return (
    <div className="container p-5">
      <div className="row">
        {questions.map((question, index) => {
          return (
            <button
              key={index}
              className={`btn ${
                typeof question.userAnswer !== "undefined" &&
                question.answers[question.userAnswer].isCorrect
                  ? "bg-success"
                  : typeof question.userAnswer === "undefined"
                  ? ""
                  : "bg-danger"
              }`}
              onClick={() => dispatch(goToQuestion(index))}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <div className="row">
        <p className="pt-5">
          <span>{questionNumber + 1 + " )"} </span>
          {questions[questionNumber].text}
        </p>
      </div>

      <div className="row options-wrapper">
        {questions[questionNumber].answers?.map((answer, index) => {
          return (
            <div
              key={index}
              className={`form-check p-2 m-1 ${getOptionClass(
                index,
                answer.isCorrect
              )}`}
            >
              <input
                type="checkbox"
                className="form-check-input"
                onClick={() => dispatch(checkAnswer(index))}
                checked={
                  typeof questions[questionNumber].userAnswer !== "undefined" &&
                  questions[questionNumber].userAnswer === index
                }
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                {answer.text}
              </label>
            </div>
          );
        })}

        <div className="pt-5">
          <button
            type="button"
            className="btn btn-outline-primary me-3"
            onClick={() => dispatch(prevPage(questionNumber))}
          >
            Prev
          </button>

          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => dispatch(nextPage(questionNumber))}
          >
            Next
          </button>

          <div className="row mt-5">
            {typeof questions[questionNumber].userAnswer !== "undefined" && (
              <p>
                <span className="fw-bold">Explanation :</span>
                {questions[questionNumber].explanation}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
