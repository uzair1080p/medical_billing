import React from 'react';

const CaseProgress = () => {
  return (
    <div className="page case-progress">
      <h2>Case Progress</h2>
      <p>Track the progress of all ongoing cases.</p>
      <div className="progress-bar">
        <span>Document Review: 70%</span>
        <div className="progress"></div>
      </div>
      <div className="progress-bar">
        <span>Insurance Communication: 40%</span>
        <div className="progress"></div>
      </div>
    </div>
  );
};

export default CaseProgress;
