import { Outlet } from "react-router";
import StyledNavbar from "./StyledNavbar";

const Home = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};
export default Home;
