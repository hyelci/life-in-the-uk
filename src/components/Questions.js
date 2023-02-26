import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  changePage,
  getAllQuestions,
  nextPage,
  prevPage,
} from "../features/mockTests/mockTestsSlice";

const Questions = () => {
  const { questions, questionNumber, isLoading } = useSelector(
    (store) => store.mockTests
  );
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllQuestions(id));
  }, [id]);

  if (isLoading) {
    return <p>Loading..</p>;
  }

  return (
    <div>
      <p>
        <span>{questionNumber + 1 + " " + ")"} </span>
        {questions[questionNumber].text}
      </p>
      <div>
        {questions[questionNumber].answers?.map((answer, index) => {
          return (
            <div key={index} class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                {answer.text}
              </label>
            </div>
          );
        })}
        <button
          type="button"
          className="btn btn-outline-primary"
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
      </div>
    </div>
  );
};

export default Questions;
