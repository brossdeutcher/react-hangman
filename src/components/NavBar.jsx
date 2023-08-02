import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/">Game</Link>
        <Link to="/instructions">Instructions</Link>
      </nav>
    </>
  );
};

export default NavBar;
