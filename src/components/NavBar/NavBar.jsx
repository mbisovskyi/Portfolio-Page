import "./NavBar.css";
//Importing assets
import logo from "../../assets/logo.png";
// Importing hooks
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
          Contacts
        </li>
      </ul>
      <img className="logo-img" src={logo} alt="logo" height="150px" />
    </div>
  );
};

export default NavBar;
