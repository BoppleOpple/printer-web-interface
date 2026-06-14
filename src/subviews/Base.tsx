import type { ReactElement } from "react";
import "./Base.css";
import CloseButton from "../assets/MISSING.png";

interface BaseSubviewProps {
  children: ReactElement;
  title: string;
  closeSubview: CallableFunction;
}

function BaseSubview({
  children,
  title,
  closeSubview,
}: BaseSubviewProps): ReactElement {
  return (
    <div className="screen-block">
      <div className="subview-content">
        <div className="subview-head">
          <button
            className="image-button subview-close-button"
            onClick={() => closeSubview()}
          >
            <img src={CloseButton} />
          </button>
          <span className="spacer" />
          <h1>{title}</h1>
          <span className="spacer" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default BaseSubview;
