import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getHandbook } from "../features/handbook/handbookSlice";
import { Link } from "react-router-dom";
import "./Handbook.css";

const Handbook = () => {
  const { handbook } = useSelector((store) => store.handbookTitles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHandbook());
  }, [dispatch]);

  return (
    <div className="p-5 container  shadow-lg shadow-misty-rose-500/4">
      <table className="min-w-full divide-y divide-gray-300">
        <tbody className="divide-y divide-gray-200 bg-white">
          {handbook.map((chapter) => (
            <tr key={chapter.id} className="p-3 links ">
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                <Link to={`/handbook/${chapter.id}`}>{chapter.title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    // <div className="p-5 container  shadow-lg shadow-misty-rose-500/4">
    //   {handbook.map((chapter) => {
    //     return (
    //       <div key={chapter.id} className="p-3 links ">
    //         <Link to={`/handbook/${chapter.id}`}>{chapter.title}</Link>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default Handbook;
