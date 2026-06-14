import { useState, type ReactElement } from "react";
import "./App.css";
import JobList from "./components/JobList";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import type { Job } from "./datatypes/Job";
import ViewJobSubview from "./subviews/ViewJob";
import { SUBVIEW_VIEW_JOB } from "./subviews/Codes";

function getSubviewContent(
  subviewCode: number,
  setSubviewCode: CallableFunction,
  job: Job | null,
): ReactElement {
  console.log(subviewCode);
  switch (subviewCode) {
    case 1:
      return <ViewJobSubview onClose={() => setSubviewCode(0)} job={job} />;
    default:
      return <></>;
  }
}

function App(): ReactElement {
  const [subview, setSubview] = useState(SUBVIEW_VIEW_JOB);
  const [selectedJobId, setSelectedJobId] = useState(-1);

  console.log(selectedJobId);

  const jobs: Job[] = [
    {
      id: 1,
      name: "Successful Job Name",
      owner: 100,
      creationTime: new Date("June 15, 2026"),
      status: "Successful",
    },
    {
      id: 2,
      name: "Failure Job Name",
      owner: 100,
      creationTime: new Date("June 15, 2026"),
      status: "Failure",
    },
    {
      id: 3,
      name: "Cancelled Job Name",
      owner: 100,
      creationTime: new Date("June 15, 2026"),
      status: "Cancelled",
    },
    {
      id: 4,
      name: "Pending Job Name",
      owner: 100,
      creationTime: new Date("June 15, 2026"),
      status: "Pending",
    },
    {
      id: 5,
      name: "Running Job Name",
      owner: 100,
      creationTime: new Date("June 15, 2026"),
      status: "Running",
    },
    {
      id: 6,
      name: "Other Job Name",
      owner: 100,
      creationTime: new Date("June 15, 2026"),
      status: "Other",
    },
  ];

  const selectedJob: Job | null =
    jobs.filter((job: Job) => job.id == selectedJobId)[0] || null;

  const subviewContent = getSubviewContent(subview, setSubview, selectedJob);

  return (
    <>
      {subviewContent}
      <div className="main-content">
        <Navbar />
        <div className="under-nav">
          <Sidebar />
          <JobList
            jobs={jobs}
            onSelectJob={(job: Job) => {
              setSubview(1);
              setSelectedJobId(job.id);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
