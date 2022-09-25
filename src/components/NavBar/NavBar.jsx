import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-wrap">
      <ul className="navbar-list">
        <li className="navbar-item" onClick={() => navigate("/")}>
          Home
        </li>
        <li className="navbar-item" onClick={() => navigate("/about")}>
          About
        </li>
        <li className="navbar-item" onClick={() => navigate("/projects")}>
          Projects
        </li>
        <li className="navbar-item" onClick={() => navigate("/contacts")}>
          Contact
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
