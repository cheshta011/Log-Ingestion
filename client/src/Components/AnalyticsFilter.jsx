import React from "react";

function AnalyticsFilter({ setFilters, filters, fetchAnalytics }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFilters({
      timestamp_start: "",
      timestamp_end: "",
    });
  };
  return (
    <div>
      <div className="card mt-3 p-3 border rounded bggColor">
        <div className="row g-3">
          <div className="col-md-4 d-flex align-items-center">
            <label className="text-nowrap me-2 labelStyle">Start Date : </label>
            <input
              type="datetime-local"
              name="timestamp_start"
              value={filters.timestamp_start}
              placeholder="start date"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <label className="text-nowrap me-2 labelStyle">End Date : </label>
            <input
              type="datetime-local"
              name="timestamp_end"
              value={filters.timestamp_end}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <button
              className=" text-nowrap applyBtn"
              onClick={fetchAnalytics}
              style={{ width: "30%" }}
            >
              Apply Filters
            </button>
            <button
              className="clearBtn-yellow text-nowrap ms-2"
              onClick={handleReset}
              style={{ width: "30%" }}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsFilter;
