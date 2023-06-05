import { useState } from "react";
import PopupModal from "./components/common/PopupModal";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleActivate = () => {
    // Perform activation logic here
    setIsActive(true);
    setShowPopup(false); // Hide the popup after confirmation
  };

  const handleDeactivate = () => {
    // Perform deactivation logic here
    setIsActive(false);
    setShowPopup(false); // Hide the popup after confirmation
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="app">
      <h1>Active and Deactivate popup</h1>
      <button onClick={openPopup}>
        {" "}
        {isActive ? "Activate" : "Deactivate"}
      </button>
      {showPopup && (
        <PopupModal
          isActive={isActive}
          onConfirm={isActive ? handleDeactivate : handleActivate}
          onCancel={closePopup}
        />
      )}
    </div>
  );
}

export default App;
