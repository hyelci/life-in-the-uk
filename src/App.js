import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Handbook from "./components/Handbook";
import SharedLayout from "./components/SharedLayout";
import MockTests from "./components/MockTests";
import Questions from "./components/Questions";
import HandbookDetails from "./components/HandbookDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<SharedLayout />}>
          <Route path="" element={<Landing />}></Route>
          <Route path="/handbook" element={<Handbook />}></Route>
          <Route path="/mockTests" element={<MockTests />}></Route>
          <Route path="/questions/:id" element={<Questions />}></Route>
          <Route path="/handbook/:id" element={<HandbookDetails />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
