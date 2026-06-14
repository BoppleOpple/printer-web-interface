import type { ReactElement } from "react";
import FoldableList from "./base/FoldableList";
import type { Job } from "../datatypes/Job";
import StatusIndicator from "./base/StstusIndicator";
import "./JobList.css";
import CalendarIcon from "../assets/MISSING.png";
import ClockIcon from "../assets/MISSING.png";

interface JobListProps {
  jobs: Array<Job>;
  onSelectJob: CallableFunction;
}

interface JobEntryProps {
  job: Job;
  onClick: CallableFunction;
}

function _formatDate(date: Date): string {
  return `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;
}

function _formatTime(date: Date): string {
  if (!date) return "--:--:--";
  return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
}

function JobEntry({ job, onClick }: JobEntryProps): ReactElement {
  return (
    <a className="job-entry" onClick={() => onClick()}>
      <StatusIndicator status={job.status} />
      <div className="job-entry-center-matter">
        <p>{job.name}</p>
      </div>
      <div className="job-entry-right-matter">
        <div className="label-container">
          <img src={CalendarIcon} className="job-entry-time-icon" />
          <span>{_formatDate(job.creationTime)}</span>
        </div>
        <div className="label-container">
          <img src={ClockIcon} className="job-entry-time-icon" />
          <span>{_formatTime(job.duration)}</span>
        </div>
      </div>
    </a>
  );
}

function JobList({ jobs, onSelectJob }: JobListProps): ReactElement {
  const contents: Map<string, Array<ReactElement | string>> = new Map([
    ["Successful", []],
    ["Failure", []],
    ["Cancelled", []],
    ["Pending", []],
    ["Running", []],
    ["Other", []],
  ]);

  const categoryOrder: string[] = [
    "Successful",
    "Failure",
    "Running",
    "Pending",
    "Cancelled",
    "Other",
  ];

  jobs.forEach((job: Job) => {
    const categoryArray: Array<ReactElement | string> =
      contents.get(job.status) || contents.get("Other");
    categoryArray.push(<JobEntry job={job} onClick={() => onSelectJob(job)} />);
  });

  return <FoldableList contents={contents} order={categoryOrder} />;
}

export default JobList;
