import React from "react";

const LoadingScreen = (prop) => {
  return (
    <div
      className="loader-container"
      style={{ backgroundColor: prop.isDark ? "#2b3845" : "white" }}
    >
      <span className="loader"></span>
    </div>
  );
};

export default LoadingScreen;
