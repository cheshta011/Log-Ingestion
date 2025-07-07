import React from "react";

function LogFiltering({ filters, setFilters, fetchLogs }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFilters({
      level: "",
      message: "",
      resourceId: "",
      timestamp_start: "",
      timestamp_end: "",
      traceId: "",
      spanId: "",
      commit: "",
    });
  };

  return (
    <div className="card mt-1 p-3 border rounded bggColor">
      <div className="row g-3">
        <div className="col-md-3">
          <input
            type="text"
            name="message"
            value={filters.message}
            onChange={handleChange}
            className="form-control "
            placeholder="Message"
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="resourceId"
            value={filters.resourceId}
            onChange={handleChange}
            className="form-control"
            placeholder="Resource ID"
          />
        </div>
        <div className="col-md-3 form-group">
          <select
            className="form-select "
            name="level"
            value={filters.level}
            onChange={handleChange}
          >
            <option value="">All Levels</option>
            <option value="error">Error</option>
            <option value="warn">Warn</option>
            <option value="info">Info</option>
            <option value="debug">Debug</option>
          </select>
        </div>
        <div className="col-md-3 d-grid justify-content-end">
          <button className="applyBtn w-100 " onClick={fetchLogs}>
            Apply Filters
          </button>
        </div>

        <div className="col-md-4 d-flex align-items-center ">
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

        <div className="col-md-4 d-grid justify-content-end">
          <button className="clearBtn-yellow w-100" onClick={handleReset}>
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogFiltering;
