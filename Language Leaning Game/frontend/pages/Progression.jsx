import React, { useState } from "react";
import "./Progression.css";
import { useNavigate } from "react-router-dom";

const Progression = () => {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(0);
  const [level, setlevel] = useState(2);
  // const [buttonState, setButtonState] = useState()

  function exercise(num) {
    // Set state to show the overlay
    setShowOverlay(num);
  }

  function closeOverlay() {
    // Set state to hide the overlay
    setShowOverlay(0);
  }

  function next() {
    alert("next");
  }

  const handleNavigation = (path, curLevel) => {
    // Use the navigate function to navigate to the specified path
    if(curLevel==level){
    navigate(path);
    }
    else if(curLevel>level){
      alert("You have not cleared the previous levels yet!");
    }
    else{
      alert("Already attempted!");
    }
  };

  return (
    <div className="parent">
      <div className="container">
        <div className="type1">
          {showOverlay === 1 && (
            <div className="overlay">
              <div className="overlay-content">
                <button className="close" onClick={closeOverlay}>
                  X
                </button>
                <p>Exercise 2/5</p>
                <p>
                  <button className="sqare-button" onClick={() => handleNavigation("/quizboard", 1)}>
                    Attempt
                  </button>
                </p>
              </div>
            </div>
          )}
          <button className="level" id="3d-button" onClick={() => exercise(1)}>
            Level1
          </button>
        </div>

        <div className="type2">
          {showOverlay === 2 && (
            <div className="overlay">
              <div className="overlay-content">
                <button className="close" onClick={closeOverlay}>
                  X
                </button>
                <p>Exercise 2/5</p>
                <p>
                  <button className="sqare-button" onClick={() => handleNavigation("/quizboard", 2)}>
                    Attempt
                  </button>
                </p>
              </div>
            </div>
          )}
          <button
            className="3d-button level"
            id="3d-button"
            onClick={() => exercise(2)}
          >
            Level2
          </button>
        </div>

        <div className="type1">
          {showOverlay === 3 && (
            <div className="overlay">
              <div className="overlay-content">
                <button className="close" onClick={closeOverlay}>
                  X
                </button>
                <p>Exercise 2/5</p>
                <p>
                  <button className="sqare-button" onClick={() => handleNavigation("/quizboard", 3)}>
                    Attempt
                  </button>
                </p>
              </div>
            </div>
          )}
          <button
            className="3d-button level"
            id="3d-button"
            onClick={() => exercise(3)}
          >
            Level3
          </button>
        </div>

        <div className="type2">
          {showOverlay === 4 && (
            <div className="overlay">
              <div className="overlay-content">
                <button className="close" onClick={closeOverlay}>
                  X
                </button>
                <p>Exercise 2/5</p>
                <p>
                  <button
                    className="sqare-button"
                    id="3d-button"
                    onClick={() => handleNavigation("/quizboard", 4)}
                  >
                    Attempt
                  </button>
                </p>
              </div>
            </div>
          )}
          <button className="3d-button level" onClick={() => exercise(4)}>
            Level4
          </button>
        </div>

        <div className="type1">
          {showOverlay === 5 && (
            <div className="overlay">
              <div className="overlay-content">
                <button className="close" onClick={closeOverlay}>
                  X
                </button>
                <p>Exercise 2/5</p>
                <p>
                  <button className="sqare-button" onClick={() => handleNavigation("/quizboard", 5)}>
                    Attempt
                  </button>
                </p>
              </div>
            </div>
          )}
          <button
            className="3d-button level"
            id="3d-button"
            onClick={() => exercise(5)}
          >
            Level5
          </button>
        </div>
      </div>
    </div>
  );
};

export default Progression;