import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <Link className="navlink" to="/">Game</Link>
        <Link className="navlink" to="/instructions">Instructions</Link>
      </nav>
    </>
  );
};

export default NavBar;
