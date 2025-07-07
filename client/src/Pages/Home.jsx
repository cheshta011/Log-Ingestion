import React, { useState } from "react";
import Logs from "./Logs";
import Analytics from "./Analytics";

function Home() {
  const [activeTab, setActiveTab] = useState("logs");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="row ps-2s ">
      <div className="card mt-0" style={{ width: "95vw", height: "93vh" }}>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "logs" ? "active" : ""}`}
              onClick={() => handleTabClick("logs")}
              href="#"
            >
              Logs
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeTab === "analytics" ? "active" : ""
              }`}
              onClick={() => handleTabClick("analytics")}
              href="#"
            >
              Analytics
            </a>
          </li>
        </ul>

        {/* Content based on active tab */}
        <div className="mt-2">
          {activeTab === "logs" && (
            <p>
              <Logs />
            </p>
          )}
          {activeTab === "analytics" && (
            <p>
              <Analytics />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
