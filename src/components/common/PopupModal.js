import React from "react";
import "../common/popup.css";
const PopupModal = ({ isActive, onConfirm, onCancel }) => {
  return (
    <div className="popup-modal">
      <h2>Confirmation</h2>
      <p>
        {isActive
          ? "Are you sure you want to activate?"
          : "Are you sure you want to deactivate?"}
      </p>
      <div className="button-group">
        <button className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
        <button className="confirm-button" onClick={onConfirm}>
          {isActive ? "Activate" : "Deactivate"}
        </button>
      </div>
    </div>
  );
};

export default PopupModal;
