import React, { useState } from "react";

const AccountCreationTab = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update form data with the new input value
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log form data on submission
    console.log("Form submitted with data:", formData);

    // Clear form fields if 'clicked' state is true
    alert("Account Created Successfully!");
    clicked &&
      setFormData({
        username: "",
        password: "",
      });
  };

  // State to manage the 'clicked' state
  const [clicked, setclicked] = useState(false);

  return (
    <div className="border border-black w-fit max-w-sm h-[350px] m-auto mt-32 font-mono rounded-lg bg-slate-100">
      <h1 className="flex justify-center m-10 text-3xl font-bold text-cyan-800">
        Account Creation
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-16">
          {/* Username input field */}
          <div className="flex justify-center mb-3">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter username"
              required
              className="border border-black p-2 rounded-lg outline-none w-72"
            />
          </div>
          {/* Password input field */}
          <div className="flex justify-center mt-6">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              required
              className="border border-black p-2 rounded-lg outline-none w-72"
            />
          </div>
          {/* Button to create account */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              onClick={() => {
                // Toggle the 'clicked' state and show alert
                setclicked(!clicked);
              }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-2 rounded-lg font-bold"
            >
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountCreationTab;
