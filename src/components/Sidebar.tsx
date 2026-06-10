import type { ReactElement } from "react";
import "./Sidebar.css";

function SidebarAction({ text = "", onClick = () => {} }): ReactElement {
  return (
    <button className="sidebar-action" onClick={onClick}>
      {text}
    </button>
  );
}

function Sidebar(): ReactElement {
  return (
    <div className="sidebar">
      <div className="action-container">
        <SidebarAction text="Add Job" />
        <SidebarAction text="Add Printer" />
      </div>
    </div>
  );
}

export default Sidebar;
