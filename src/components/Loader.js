import React from "react";

const Loader = () => {
  return (
    <div className="spinner-container">
      <h1>Fetching data...</h1>
      <div className="spinner">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
