import "./ParentElement.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaUserCircle, FaHome, FaTrophy, FaPlayCircle } from "react-icons/fa";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import Progression from "./Progression";

const ParentElement = () => {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    // Use the navigate function to navigate to the specified path
    navigate(path);
  };

  const languageOptions = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "telugu", label: "Telugu" },
    { value: "assamese", label: "Assamese" },
  ];

  return (
    <div className="navbar">
      <div className={`side-navbar ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars size={25} color={isMenuOpen ? "black" : "white"} />
        </div>
        <div className="menu-list">
          <div
            className="menu-item"
            onClick={() => handleNavigation("/dashboard")}
          >
            <FaHome size={27} color="black" />
          </div>
          <div
            className="menu-item"
            onClick={() => handleNavigation("/leaderboard")}
          >
            <FaTrophy size={27} color="black" />
          </div>
          <div
            className="menu-item"
            onClick={() => handleNavigation("/quiz")}
          >
            <FaPlayCircle size={27} color="black" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="top-navbar">
          <div className="logo">LangLeap</div>
          <div className="user-info">
            {/* Language Selector Dropdown */}
            <Select
              options={languageOptions}
              className="language-dropdown"
              classNamePrefix="select"
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "black",
                  border: "none",
                  fontSize: "20px",
                  color: "white", // Adjust font size as needed
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: "black",
                  fontSize: "20px", // Adjust font size as needed
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "white",
                  fontSize: "20px", // Adjust font size as needed
                }),
              }}
            />
            {/* User Profile Section */}
            <div className="user-profile">
              <FaUserCircle size={27} color="white" />
              <span>@saurav1234</span>
            </div>
          </div>
        </div>
        <Progression />
      </div>
    </div>
  );
};

export default ParentElement;