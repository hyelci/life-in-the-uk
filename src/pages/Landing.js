import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="container row bg-light">
        <p className="p-5 col ">
          Click here to read the Handbook before you start looking at the exam
          questions.
        </p>
        <Link to="/handbook" className="p-5 col">
          Handbook
        </Link>
      </div>
      <div className="container row bg-light">
        <p className="p-5 col">Click here to access mock tests.</p>
        <Link to="/mockTests" className="col p-5">
          Mock Tests
        </Link>
      </div>
    </div>
  );
};

export default Landing;
