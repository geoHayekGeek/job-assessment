import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";  // <-- important, see below
import { FaUserCircle } from "react-icons/fa";

const UserButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/login");
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="relative">
      <FaUserCircle
        onClick={toggleDropdown}
        className="text-2xl text-gray-700 cursor-pointer"
      />

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border z-50">
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-white"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserButton;
