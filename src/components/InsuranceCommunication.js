import React from 'react';

const InsuranceCommunication = () => {
  return (
    <div className="page insurance-communication">
      <h2>Insurance Communication</h2>
      <p>Manage and track communication with insurance companies.</p>
      <div className="message-box">
        <textarea placeholder="Enter message..."></textarea>
        <button className="send-button">Send to Insurance</button>
      </div>
    </div>
  );
};

export default InsuranceCommunication;
