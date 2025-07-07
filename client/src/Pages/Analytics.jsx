import { useEffect, useState } from "react";
import { getLogAnalytics } from "../services/api";
import AnalyticsFilter from "../Components/AnalyticsFilter";
import AnalyticsDashboard from "../Components/AnalyticsDashboard";

function Analytics() {
  const [filters, setFilters] = useState({
    timestamp_start: "",
    timestamp_end: "",
  });
  const [data, setData] = useState([]);

  const fetchAnalytics = async () => {
    try {
      const data = await getLogAnalytics(filters);
      setData(data);
    } catch (err) {
      console.error("Failed to fetch logs:", err);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  return (
    <div>
      <AnalyticsFilter
        filters={filters}
        setFilters={setFilters}
        fetchAnalytics={fetchAnalytics}
      />
      <AnalyticsDashboard data={data} />
    </div>
  );
}

export default Analytics;
