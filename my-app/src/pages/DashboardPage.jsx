import harakaLogo from "../assets/HarakaRunnerLogo.png";

const overviewStats = [
  {
    label: "Total Patients",
    value: 48,
    delta: "+12%",
    trend: "up",
    tone: "blue",
  },
  {
    label: "Today's Sessions",
    value: 12,
    delta: "+20%",
    trend: "up",
    tone: "cyan",
  },
  {
    label: "Completed Sessions",
    value: 10,
    delta: "+18%",
    trend: "up",
    tone: "green",
  },
  {
    label: "Pending Sessions",
    value: 2,
    delta: "-50%",
    trend: "down",
    tone: "red",
  },
];

const patientList = [
  {
    name: "Ahmed Mohamed",
    note: "Knee Pain",
    time: "Today - 10:00 AM",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sara Ali",
    note: "Shoulder Injury",
    time: "Today - 11:00 AM",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Omar Hassan",
    note: "Back Pain",
    time: "Today - 12:00 PM",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Laila Ibrahim",
    note: "Neck Pain",
    time: "Today - 2:00 PM",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
  },
];

function BrandLogo({ compact = false }) {
  return (
    <div className={`brand ${compact ? "brand-compact" : ""}`}>
      <img src={harakaLogo} alt="Haraka logo" className="brand-svg" />
    </div>
  );
}

function Icon({ type, className }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
  };

  switch (type) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="5.5" />
          <path d="M16 16l4 4" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common}>
          <path d="M15 17h5l-1.5-1.5A2.5 2.5 0 0 1 18 13.9V11a6 6 0 1 0-12 0v2.9c0 .7-.2 1.3-.5 1.9L4 17h5" />
          <path d="M10 20a2 2 0 0 0 4 0" />
        </svg>
      );
    case "dashboard":
      return (
        <svg {...common}>
          <path d="M4 12.5V5.5A1.5 1.5 0 0 1 5.5 4h3A1.5 1.5 0 0 1 10 5.5v7A1.5 1.5 0 0 1 8.5 14h-3A1.5 1.5 0 0 1 4 12.5Z" />
          <path d="M14 18v-9A1.5 1.5 0 0 1 15.5 7.5h3A1.5 1.5 0 0 1 20 9v9A1.5 1.5 0 0 1 18.5 19.5h-3A1.5 1.5 0 0 1 14 18Z" />
          <path d="M14 19.5h6" />
        </svg>
      );
    case "patients-menu":
      return (
        <svg {...common}>
          <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M16 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M3 18c1.2-2.2 3.5-3.3 5.8-3.3S11.8 15.8 13 18" />
          <path d="M13 18c.7-1.6 2.2-2.7 4.2-2.7 2 0 3.6 1.1 4.8 2.7" />
        </svg>
      );
    case "sessions":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M8 2v4M16 2v4M3 9h18" />
        </svg>
      );
    case "exercise":
      return (
        <svg {...common}>
          <path d="M7 8.5c1.6 0 3.2-1.5 3.2-3.2S8.6 2 7 2 3.8 3.5 3.8 5.2 5.4 8.5 7 8.5Zm10 7c1.6 0 3.2-1.5 3.2-3.2S18.6 9 17 9s-3.2 1.5-3.2 3.2 1.6 3.3 3.2 3.3Zm-8 4.5c1.5-1.5 3.8-2.3 6.1-2.2 2.6.2 5 1.3 6.9 3.2M9 11.5l-2.5 2.3L9 16M15 11.5l2.5 2.3L15 16" />
        </svg>
      );
    case "reports":
      return (
        <svg {...common}>
          <path d="M7 18V9m5 9V5m5 13v-7" />
          <path d="M3 20h18" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3 10h18" />
        </svg>
      );
    case "messages":
      return (
        <svg {...common}>
          <path d="M5 18l1.2-3.6A7 7 0 1 1 19 12.2V15a3 3 0 0 1-3 3H5Z" />
          <path d="M8 10h8M8 13h6" />
        </svg>
      );
    case "settings":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.8 1.8 0 0 0 .35 1.9l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.8 1.8 0 0 0 15 19.4a1.8 1.8 0 0 0-1.02 1.6V21a2 2 0 1 1-4 0v-.09A1.8 1.8 0 0 0 8.98 19.4a1.8 1.8 0 0 0-1.9.35l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.8 1.8 0 0 0 4.6 15a1.8 1.8 0 0 0-1.62-1.02H2.9a2 2 0 1 1 0-4h.08A1.8 1.8 0 0 0 4.6 8.98a1.8 1.8 0 0 0-.35-1.9l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.8 1.8 0 0 0 8.98 4.6a1.8 1.8 0 0 0 1.02-1.6V2.9a2 2 0 1 1 4 0v.08A1.8 1.8 0 0 0 15.02 4.6a1.8 1.8 0 0 0 1.9-.35l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.8 1.8 0 0 0 19.4 8.98c.45.2.98.08 1.31-.26.33-.34.46-.87.28-1.32l-.09-.24a2 2 0 1 1 3.17 2.46l-.14.14A1.8 1.8 0 0 0 22.4 11c.2.46.08.99-.26 1.32-.34.33-.87.46-1.32.28l-.24-.09A2 2 0 1 1 18.9 14.6l.14-.14A1.8 1.8 0 0 0 19.4 15Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function DashboardPage() {
  return (
    <section className="dashboard-shell">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <BrandLogo compact />
        </div>

        <nav className="nav-menu" aria-label="Sidebar menu">
          <button type="button" className="nav-item active">
            <Icon type="dashboard" className="nav-icon" />
            <span>Dashboard</span>
          </button>
          <button type="button" className="nav-item">
            <Icon type="patients-menu" className="nav-icon" />
            <span>Patients</span>
          </button>
          <button type="button" className="nav-item">
            <Icon type="sessions" className="nav-icon" />
            <span>Sessions</span>
          </button>
          <button type="button" className="nav-item">
            <Icon type="exercise" className="nav-icon" />
            <span>Exercises</span>
          </button>
          <button type="button" className="nav-item">
            <Icon type="reports" className="nav-icon" />
            <span>Reports</span>
          </button>
          <button type="button" className="nav-item">
            <Icon type="calendar" className="nav-icon" />
            <span>Calendar</span>
          </button>
          <button type="button" className="nav-item">
            <Icon type="messages" className="nav-icon" />
            <span>Messages</span>
          </button>
          <button type="button" className="nav-item">
            <Icon type="settings" className="nav-icon" />
            <span>Settings</span>
          </button>
        </nav>

        <div className="doctor-badge">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
            alt="Dr. Ahmed Hassan"
          />
          <div>
            <strong>Dr. Ahmed Hassan</strong>
            <span>Physiotherapist</span>
          </div>
        </div>
      </aside>

      <div className="main-panel">
        <header className="topbar">
          <div className="searchbox">
            <Icon type="search" className="search-icon" />
            <span>Search patient, session, or anything...</span>
          </div>
          <div className="topbar-tools">
            <button
              type="button"
              className="icon-button"
              aria-label="Notifications"
            >
              <Icon type="bell" className="nav-icon" />
            </button>
            <div className="date-chip">
              <span>Mon, Aug 25, 2025</span>
            </div>
          </div>
        </header>

        <div className="content-area">
          <h2>Dashboard</h2>
          <p className="section-copy">Overview of your clinic today</p>

          <div className="stats-grid">
            {overviewStats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <div className="stat-icon">
                  {stat.label === "Total Patients" && (
                    <Icon type="patients-menu" />
                  )}
                  {stat.label === "Today's Sessions" && (
                    <Icon type="calendar" />
                  )}
                  {stat.label === "Completed Sessions" && (
                    <Icon type="dashboard" />
                  )}
                  {stat.label === "Pending Sessions" && (
                    <Icon type="sessions" />
                  )}
                </div>
                <div className="stat-info">
                  <div className="stat-topline">
                    <strong>{stat.label}</strong>
                  </div>
                  <div className="stat-body">
                    <span className="stat-value">{stat.value}</span>
                    <span
                      className={`stat-delta ${stat.trend === "down" ? "down" : "up"}`}
                    >
                      {stat.delta}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="overview-layout">
            <article className="chart-card">
              <div className="panel-header">
                <h3>Session Overview</h3>
                <div className="tabs">
                  <button type="button" className="tab active">
                    This Week
                  </button>
                  <button type="button" className="tab">
                    This Month
                  </button>
                  <button type="button" className="tab">
                    This Year
                  </button>
                </div>
              </div>

              <svg
                viewBox="0 0 620 260"
                className="chart-svg"
                aria-label="session overview chart"
              >
                {[0, 5, 10, 15, 20].map((gridValue) => (
                  <g key={gridValue}>
                    <line
                      x1="48"
                      x2="610"
                      y1={220 - gridValue * 9}
                      y2={220 - gridValue * 9}
                      stroke="#dfe7ee"
                      strokeDasharray="4 6"
                    />
                    <text
                      x="12"
                      y={225 - gridValue * 9}
                      fill="#7f8b99"
                      fontSize="11"
                    >
                      {gridValue}
                    </text>
                  </g>
                ))}
                <path
                  d="M60 180 L150 160 L220 145 L290 165 L360 140 L430 85 L495 50 L560 70 L610 35 L610 220 L60 220 Z"
                  fill="rgba(14, 122, 214, 0.08)"
                />
                <path
                  d="M60 180 L150 160 L220 145 L290 165 L360 140 L430 85 L495 50 L560 70 L610 35"
                  fill="none"
                  stroke="#0e7ad6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {[60, 150, 220, 290, 360, 430, 495, 560, 610].map(
                  (x, index) => (
                    <g key={x}>
                      <line
                        x1={x}
                        x2={x}
                        y1="220"
                        y2="224"
                        stroke="#7a8ea2"
                        strokeWidth="1"
                      />
                      {index < 7 && (
                        <text
                          x={x}
                          y="245"
                          fill="#7a8ea2"
                          fontSize="12"
                          textAnchor="middle"
                        >
                          {
                            ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][
                              index
                            ]
                          }
                        </text>
                      )}
                    </g>
                  ),
                )}
              </svg>
            </article>

            <aside className="patients-card">
              <div className="panel-header compact-header">
                <h3>Recent Patients</h3>
                <button type="button" className="link-button">
                  View All
                </button>
              </div>

              <ul className="patient-list">
                {patientList.map((patient) => (
                  <li key={patient.name} className="patient-item">
                    <img src={patient.avatar} alt={patient.name} />
                    <div className="patient-copy">
                      <strong>{patient.name}</strong>
                      <span>{patient.note}</span>
                    </div>
                    <time>{patient.time}</time>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
