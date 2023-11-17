import React, { useState } from "react";
import UserDetails from "./components/UserDetails";
import AccountCreation from "./components/AccountCreation";

const App = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("userDetails");

  // Function to render the content based on the active tab
  const renderTabContent = () => {
    return activeTab === "userDetails" ? <UserDetails /> : <AccountCreation />;
  };

  return (
    <div>
      {/* Tab navigation */}
      <div className="tabs flex border-solid text-lg font-medium mb-6 bg-slate-300 shadow-lg shadow-slate-600/50 font-mono p-2">
        {/* Button for User Details tab */}
        <button
          onClick={() => {
            setActiveTab("userDetails");
          }}
          className={
            activeTab === "userDetails"
              ? "active bg-slate-500 text-white rounded-2xl px-6 py-3"
              : "px-6 py-3"
          }
        >
          User Details
        </button>
        {/* Button for Account Creation tab */}
        <button
          onClick={() => setActiveTab("accountCreation")}
          className={
            activeTab === "accountCreation"
              ? "active bg-slate-500 text-white rounded-2xl px-6 py-3"
              : "px-6 py-3"
          }
        >
          Account Creation
        </button>
      </div>

      {/* Render the content based on the active tab */}
      {renderTabContent()}
    </div>
  );
};

export default App;
