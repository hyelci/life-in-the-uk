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
    <div className="p-5 container list-group ">
      {handbook.map((chapter) => {
        return (
          <div
            key={chapter.id}
            className="p-3 list-group-item-secondary links "
          >
            <Link to={`/handbook/${chapter.id}`}>{chapter.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Handbook;
