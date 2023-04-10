import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="container row shadow-lg shadow-misty-rose-500/4">
        <p className="p-5 col ">
          Click here to read the Handbook before you start looking at the exam
          questions.
        </p>
        <Link
          to="/handbook"
          className="rounded-full bg-white px-3.5 py-2 mt-4  w-40 h-50 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Handbook
        </Link>
      </div>
      <div className="container row shadow-lg shadow-misty-rose-500/40">
        <p className="p-5 col">Click here to access mock tests.</p>
        <Link
          to="/mockTests"
          className="rounded-full bg-white px-3.5 py-2 mt-4 w-40 h-50 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Mock Tests
        </Link>
      </div>
    </div>
  );
};

export default Landing;
