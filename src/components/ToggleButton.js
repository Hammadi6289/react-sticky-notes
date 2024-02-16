import React from "react";

const ToggleButton = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1> Notes</h1>
      <button
        className="theme-change"
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      >
        Change Theme
      </button>
    </div>
  );
};
export default ToggleButton;
