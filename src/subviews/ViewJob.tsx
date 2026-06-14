import type { ReactElement } from "react";
import BaseSubview from "./Base";
import "./ViewJob.css";
import type { Job } from "../datatypes/Job";

interface ViewJobSubviewProps {
  onClose: CallableFunction;
  job: Job;
}

function ViewJobSubview({ onClose, job }: ViewJobSubviewProps): ReactElement {
  return (
    job && (
      <BaseSubview title={job.name} closeSubview={() => onClose(0)}>
        <div className="test-div"></div>
      </BaseSubview>
    )
  );
}

export default ViewJobSubview;
