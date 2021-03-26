import React from "react";

function SubmitModal({ hideModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Thank you</h1>
        <h3>for your patience and all the valuable information.</h3>
        <h3>Will try to reach out as soon as possible.</h3>
        <span className="close" onClick={() => hideModal()}>
          &times;
        </span>
      </div>
    </div>
  );
}

export default SubmitModal;
