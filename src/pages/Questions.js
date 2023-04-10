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
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

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
              className={`btn inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 ${
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

      <div className="border-collapse border border-slate-400 mt-5 mr-8">
        <div className="row ">
          <p className="pt-5">
            <span>{questionNumber + 1 + " )"} </span>
            {questions[questionNumber].text}
          </p>
        </div>

        <div className="row options-wrapper m-5 ">
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
                    typeof questions[questionNumber].userAnswer !==
                      "undefined" &&
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
        </div>

        <div className="my-5">
          {/* <button
            type="button"
            className="btn btn-outline-primary me-3"
            onClick={() => dispatch(prevPage(questionNumber))}
          >
            Prev
          </button> */}

          <div className="-mt-px flex w-0 flex-1">
            <button
              href="#"
              className="px-4 inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              <ArrowLongLeftIcon
                className="mr-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
                onClick={() => dispatch(prevPage(questionNumber))}
              />
              Previous
            </button>

            <button
              href="#"
              className="px-4 inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              onClick={() => dispatch(nextPage(questionNumber))}
            >
              Next
              <ArrowLongRightIcon
                className="ml-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => dispatch(nextPage(questionNumber))}
          >
            Next
          </button> */}

          <div className="row mt-5 ml-5">
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
