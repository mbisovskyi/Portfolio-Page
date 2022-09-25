import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-wrap">
      <ul className="navbar-list">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">About</li>
        <li className="navbar-item">Projects</li>
        <li className="navbar-item">Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
