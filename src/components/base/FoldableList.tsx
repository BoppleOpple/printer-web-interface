import { Fragment, useState, type ReactElement } from "react";
import "./FolableList.css";
import expandedIcon from "../../assets/arrow_down.svg";
import shrunkIcon from "../../assets/arrow_right.svg";

interface FoldableListProps {
  contents: Map<string, Array<ReactElement | string>>;
  order?: Array<string>;
}

function FoldableSection({ name, children = null }): ReactElement {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="foldable-section">
      <div className="foldable-section-header">
        <p>{name}</p>
        <button
          className="image-button expand-shrink-button"
          onClick={() => setExpanded(!expanded)}
        >
          <img src={expanded ? expandedIcon : shrunkIcon} />
        </button>
      </div>
      {expanded && !(children == null) && (
        <div className="foldable-section-contents">{children}</div>
      )}
    </div>
  );
}

function FoldableList({ contents, order }: FoldableListProps): ReactElement {
  const sectionOrder: Array<string> =
    order != null ? order : [...contents.keys()].sort();

  const sections: Array<ReactElement> = sectionOrder.map((name: string) => (
    <FoldableSection name={name} key={name}>
      {contents.get(name).map((item: ReactElement | string, index: number) => {
        if (typeof item === "string") {
          return <p key={index}>{item}</p>;
        } else {
          return <Fragment key={index}>{item}</Fragment>;
        }
      })}
    </FoldableSection>
  ));

  return <div className="foldable-list">{...sections}</div>;
}

export default FoldableList;
