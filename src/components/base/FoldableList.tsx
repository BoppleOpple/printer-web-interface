import { useState, type ReactElement } from "react";
import "./FolableList.css";
import expandedIcon from "../../assets/arrow_down.svg";
import shrunkIcon from "../../assets/arrow_right.svg";

function ListItem(): ReactElement {
  return <p className="foldable-list-item">This is a list item</p>;
}

function FoldableSection(): ReactElement {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="foldable-section">
      <div className="foldable-section-header">
        <p>Running</p>
        <button
          className="expand-shrink-button"
          onClick={() => setExpanded(!expanded)}
        >
          <img src={expanded ? expandedIcon : shrunkIcon} />
        </button>
      </div>
      {expanded && (
        <div className="foldable-section-contents">
          <ListItem />
        </div>
      )}
    </div>
  );
}

function FoldableList(): ReactElement {
  return (
    <div className="foldable-list">
      <FoldableSection />
    </div>
  );
}

export default FoldableList;
