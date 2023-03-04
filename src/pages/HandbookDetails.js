import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getHandbookChapters } from "../features/handbook/handbookSlice";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const HandbookDetails = () => {
  const { handbookChapters } = useSelector((store) => store.handbookTitles);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getHandbookChapters(id));
  }, [dispatch, id]);

  return (
    <div className="container p-5">
      {handbookChapters.map((handbookChapter) => {
        return (
          <div key={handbookChapter.id}>
            <ReactMarkdown>{handbookChapter.body}</ReactMarkdown>
          </div>
        );
      })}
    </div>
  );
};

export default HandbookDetails;
