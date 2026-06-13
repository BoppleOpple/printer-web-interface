type JobStatus =
  | "Successful"
  | "Failure"
  | "Cancelled"
  | "Pending"
  | "Running"
  | "Other";

export interface Job {
  id: number; // Job ID
  name: string; // Job name
  owner: number; // User ID
  creationTime: Date; // Job cration date & time
  duration?: Date; // Job duration (if applicable)
  status: JobStatus; // Current state of job
}
