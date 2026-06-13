import type { ReactElement } from "react";
import "./StstusIndicator.css";

interface StatusIndicatorProps {
  status: string;
}

const statusMap: Map<string, string> = new Map([
  ["Successful", "status-success"],
  ["Failure", "status-fail"],
  ["Cancelled", "status-cancelled"],
  ["Pending", "status-pending"],
  ["Running", "status-running"],
  ["Other", "status-other"],
]);

function StatusIndicator({ status }: StatusIndicatorProps): ReactElement {
  const statusClass: string = statusMap.get(status);

  return <i className={"status-indicator " + statusClass}></i>;
}

export default StatusIndicator;
