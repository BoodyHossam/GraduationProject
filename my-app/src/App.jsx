import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <div className="page-switcher">
      <div className="page-toggle">
        <button
          type="button"
          className={currentPage === "login" ? "active" : ""}
          onClick={() => setCurrentPage("login")}
        >
          Login
        </button>
        <button
          type="button"
          className={currentPage === "signup" ? "active" : ""}
          onClick={() => setCurrentPage("signup")}
        >
          Sign Up
        </button>
        <button
          type="button"
          className={currentPage === "dashboard" ? "active" : ""}
          onClick={() => setCurrentPage("dashboard")}
        >
          Dashboard
        </button>
      </div>

      {currentPage === "login" && <LoginPage />}
      {currentPage === "signup" && <SignupPage />}
      {currentPage === "dashboard" && <DashboardPage />}
    </div>
  );
}

export default App;
