import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getMockTests } from "../features/mockTests/mockTestsSlice";

const MockTests = () => {
  const { mockTests } = useSelector((store) => store.mockTests);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMockTests());
  }, []);

  return (
    <div>
      {mockTests?.map((mockTest) => {
        return (
          <div key={mockTest.id}>
            <Link to={`/questions/${mockTest.id}`}>{mockTest.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default MockTests;
