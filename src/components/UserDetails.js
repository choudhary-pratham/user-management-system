import React, { useState, useEffect } from "react";

const UserDetailsTab = () => {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://user-data-08z5.onrender.com/users"
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredUsers = userData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex m-auto justify-center font-mono">
        <input
          type="text"
          placeholder="Search by name..."
          onChange={(e) => handleSearch(e.target.value)}
          className="mb-6 p-2 border border-black outline-none w-72 rounded-md"
        />
      </div>

      <div className="overflow-x-auto p-2">
        <table className="w-[90%] m-auto border-2 border-slate-300 font-mono mb-3">
          <thead>
            <tr className="bg-green-400">
              <th className="text-left tracking-wide font-semibold p-2">ID</th>
              <th className="text-left tracking-wide font-semibold p-2">
                Name
              </th>
              {/* <th className="text-left tracking-wide font-semibold p-2"> */}
              {/* Email */}
              {/* </th> */}
              <th className="text-left tracking-wide font-semibold p-2">
                Phone
              </th>
              <th className="text-left tracking-wide font-semibold p-2">
                Creation Date
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                onClick={() => handleUserClick(user)}
                className="cursor-pointer hover:bg-white border border-slate-600 bg-slate-200"
              >
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.name}</td>
                {/* <td className="p-2">{user.email}</td> */}
                <td className="p-2">{user.phone}</td>
                <td className="p-2">{user.creationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedUser && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-md">
          <div className="bg-white p-5 rounded font-mono">
            <h2>
              Generate Report for{" "}
              <span className="font-bold">{selectedUser.name}</span>?
            </h2>
            <div className="flex justify-center mt-2 space-x-2">
              <button
                className="bg-green-700 text-white rounded-md p-2"
                onClick={() => {
                  setSelectedUser(null);
                  alert("Report Generated Successfully!");
                }}
              >
                Generate
              </button>
              <button
                className="bg-red-700 text-white rounded-md w-auto px-3"
                onClick={() => setSelectedUser(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetailsTab;
