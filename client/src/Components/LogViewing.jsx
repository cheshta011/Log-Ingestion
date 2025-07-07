import styles from "./LogViewing.module.css";

function LogViewing({ logs = [] }) {
  return (
    <div className="card mt-2 p-1">
      <div className="card-body p-0">
        <div
          className="table-responsive"
          style={{ maxHeight: "490px", overflowY: "auto" }}
        >
          <table className="table align-middle mb-0">
            <thead className="table-light sticky-top">
              <tr className="">
                <th>Timestamp</th>
                <th>Level</th>
                <th>Message</th>
                <th>Resource ID</th>
              </tr>
            </thead>
            <tbody>
              {logs.length > 0 ? (
                logs.map((item, i) => (
                  <tr key={i} className="">
                    <td className="text-muted">{item.timestamp}</td>
                    <td>
                      <span
                        className={`${styles.levelBadge} ${
                          styles[`level-${item.level}`]
                        } px-3 py-1`}
                      >
                        {item.level.charAt(0).toUpperCase() +
                          item.level.slice(1)}
                      </span>
                    </td>
                    <td className="text-muted">{item.message}</td>
                    <td className="text-muted">{item.resourceId}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-muted py-3">
                    No logs to display.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LogViewing;
