import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getHandbook } from "../features/handbook/handbookSlice";
import { Link } from "react-router-dom";

const Handbook = () => {
  const { handbook } = useSelector((store) => store.handbookTitles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHandbook());
  }, []);

  return (
    <div className="p-5">
      {handbook.map((chapter) => {
        return (
          <div key={chapter.id}>
            <Link to={`/handbook/${chapter.id}`}>{chapter.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Handbook;
