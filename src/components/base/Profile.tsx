import type { ReactElement } from "react";
import "./Profile.css";
import DefaultProfileIcon from "../../assets/MISSING.png";

function Profile(): ReactElement {
  return (
    <a className="profile-preview">
      <img src={DefaultProfileIcon} className="profile-image" />
    </a>
  );
}

export default Profile;
