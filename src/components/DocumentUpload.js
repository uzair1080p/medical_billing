import React from 'react';

const DocumentUpload = () => {
  return (
    <div className="page document-upload">
      <h2>Upload Medical & Billing Documents</h2>
      <p>Please upload the necessary documents to start the RCM process.</p>

      <div className="upload-section">
        <h3>Patient Demographics</h3>
        <input type="file" className="file-upload" />
        <button className="upload-button">Upload Patient Demographics</button>
      </div>

      <div className="upload-section">
        <h3>Insurance Information</h3>
        <input type="file" className="file-upload" />
        <button className="upload-button">Upload Insurance Information</button>
      </div>

      <div className="upload-section">
        <h3>Superbill</h3>
        <input type="file" className="file-upload" />
        <button className="upload-button">Upload Superbill</button>
      </div>

      <div className="upload-section">
        <h3>Medical Records</h3>
        <input type="file" className="file-upload" />
        <button className="upload-button">Upload Medical Records</button>
      </div>

      <div className="upload-section">
        <h3>Authorization Documents</h3>
        <input type="file" className="file-upload" />
        <button className="upload-button">Upload Authorization Documents</button>
      </div>
    </div>
  );
};

export default DocumentUpload;
