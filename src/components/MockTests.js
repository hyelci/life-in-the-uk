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
    <div className="px-4 sm:px-6 lg:px-8 my-5">
      <h2 className="uppercase bold text-center font-bold">Mock Tests</h2>
      <div className="mt-8 flow-root mx-5">
        <table className="min-w-full divide-y divide-gray-300">
          <tbody className="divide-y divide-gray-200 bg-white">
            {mockTests?.map((mockTest) => (
              <tr key={mockTest.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                  <Link to={`/questions/${mockTest.id}`}>{mockTest.title}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    // <div className="container list-group">
    //   {mockTests?.map((mockTest) => {
    //     return (
    //       <div key={mockTest.id} className="list-group-item-secondary p-3">
    //         <Link to={`/questions/${mockTest.id}`}>{mockTest.title}</Link>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default MockTests;
