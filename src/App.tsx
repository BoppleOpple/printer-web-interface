import "./App.css";
import JobList from "./components/JobList";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import type { Job } from "./datatypes/Job";

function App() {
  const jobs: Job[] = [
    {
      id: 1,
      name: "Job Name",
      owner: 100,
      creationTime: new Date("June 15, 2026"),
      status: "Successful",
    },
    {
      id: 2,
      name: "Job Name",
      owner: 100,
      creationTime: new Date("June 15, 2026"),
      status: "Failure",
    },
    {
      id: 3,
      name: "Job Name",
      owner: 100,
      creationTime: new Date("June 15, 2026"),
      status: "Cancelled",
    },
    {
      id: 4,
      name: "Job Name",
      owner: 100,
      creationTime: new Date("June 15, 2026"),
      status: "Pending",
    },
    {
      id: 5,
      name: "Job Name",
      owner: 100,
      creationTime: new Date("June 15, 2026"),
      status: "Running",
    },
    {
      id: 6,
      name: "Job Name",
      owner: 100,
      creationTime: new Date("June 15, 2026"),
      status: "Other",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="under-nav">
        <Sidebar />
        <JobList jobs={jobs} />
      </div>
    </>
  );
}

export default App;
