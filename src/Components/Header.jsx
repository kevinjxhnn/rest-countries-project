
import React from "react";

function Header({ isDark, setIsDark }) {
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "#2f3d4b" : "white",
      }}
    >
      <h2
        className="header--heading"
        style={{ color: isDark ? "white" : "#23272f" }}
      >
        Where in the world?
      </h2>
      <div className="toggle-dark" onClick={() => setIsDark(!isDark)}>
        {isDark && (
          <span className="material-symbols-outlined" style={{ color: "white" }}>
            wb_sunny
          </span>
        )}
        {!isDark && (
          <span className="material-symbols-outlined">dark_mode</span>
        )}
        <p style={{ color: isDark ? "white" : "#23272f" }}>
          {isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
}

export default Header;
