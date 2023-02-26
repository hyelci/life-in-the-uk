import { Link } from "react-router-dom";
import Handbook from "../components/Handbook";
import Navbar from "../components/Navbar";
import Questions from "../components/MockTests";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="row">
        <p className="p-5 col">
          Click here to read the Handbook before you start solving the exam
          questions.
        </p>
        <Link to="/handbook" className="p-5 col">
          Handbook
        </Link>
      </div>
      <div className="row">
        <p className="p-5 col">Click here to access mock tests.</p>
        <Link to="/mockTests" className="col p-5">
          Mock Tests
        </Link>
      </div>
    </div>
  );
};

export default Landing;
