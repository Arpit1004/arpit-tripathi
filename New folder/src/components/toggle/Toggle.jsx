import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Toggle = (props) => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="navbar">
      <button
        className="nav-button"
        onClick={(e) => {
          e.preventDefault();
          props.nav1(!props.nav2);
        }}
      >
        <MenuIcon />
      </button>
      <Link to="/" style={{ textDecoration: "none" }}>
        <p className="nav-items n">Home</p>
      </Link>
      <Link to="/contacts" style={{ textDecoration: "none" }}>
        <p className="nav-items n">Contact</p>{" "}
      </Link>
      <Link to="/projects" style={{ textDecoration: "none" }}>
        <p className="nav-items n">Projects</p>
      </Link>
      <p className="nav-items n">Resume</p>
      <div className="t">
        <img src={Sun} alt="" className="t-icon" />
        <img src={Moon} alt="" className="t-icon" />
        <div
          className="t-button"
          onClick={handleClick}
          style={{ left: theme.state.darkMode ? 0 : 25 }}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
