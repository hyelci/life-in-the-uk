import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getMockTests } from "../features/mockTests/mockTestsSlice";

const MockTests = () => {
  const { mockTests } = useSelector((store) => store.mockTests);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMockTests());
  }, [dispatch]);

  return (
    <div className="container list-group">
      <h2 className="text-center">Mock Tests</h2>
      {mockTests?.map((mockTest) => {
        return (
          <div key={mockTest.id} className="list-group-item-secondary p-3">
            <Link to={`/questions/${mockTest.id}`}>{mockTest.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default MockTests;
