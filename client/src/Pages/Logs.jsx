import { useEffect, useState } from "react";
import LogFiltering from "../Components/LogFiltering";
import LogViewing from "../Components/LogViewing";
import { getLogs } from "../services/api";

function Logs() {
  const [filters, setFilters] = useState({
    level: "",
    message: "",
    resourceId: "",
    timestamp_start: "",
    timestamp_end: "",
    traceId: "",
    spanId: "",
    commit: "",
  });
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    try {
      const data = await getLogs(filters);
      setLogs(data);
    } catch (err) {
      console.error("Failed to fetch logs:", err);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <>
      <LogFiltering
        filters={filters}
        setFilters={setFilters}
        fetchLogs={fetchLogs}
      />
      <LogViewing logs={logs} />
    </>
  );
}

export default Logs;
