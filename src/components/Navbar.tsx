import type { ReactElement } from "react";
import "./Navbar.css";
import Profile from "./base/Profile";
import HomeIcon from "../assets/MISSING.png";
import SettingsIcon from "../assets/MISSING.png";

function Navbar(): ReactElement {
  return (
    <div className="navbar">
      <a className="home-button" href="/">
        <img src={HomeIcon} className="navbar-icon" />
        Home
      </a>
      <div className="navbar-right">
        <a className="settings-button">
          <img src={SettingsIcon} className="navbar-icon" />
        </a>
        <Profile />
      </div>
    </div>
  );
}

export default Navbar;
