import "./Dashboard.css";
import React, { useState, useEffect } from 'react';
import { FaTasks } from "react-icons/fa";
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  const mockExerciseData = [
    { exercise: '4B', score: 24 },
    { exercise: '4A', score: 28 },
    { exercise: '3D', score: 28 },
  ];

  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    // Fetch or update exercise data from your API or state management here
    setExerciseData(mockExerciseData);
  }, []);

  const chartData = {
    labels: exerciseData.map(item => `Exercise #${item.exercise}`),
    datasets: [
      {
        label: 'Exercise Scores',
        borderColor: 'blue',
        fill: false,
        data: exerciseData.map(item => item.score),
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: [
        {
          type: 'linear',
          position: 'bottom',
        },
      ],
    },
  };
  return (
    <>
      <div className="row-one">
        <div className="block block-one">
          <div className="header">
            <p>Current Level</p>
          </div>
          <p>4</p>
          <div className="block-content">
            <p>Highest Score: 31xp</p>
          </div>
        </div>
        <div className="block block-two">
          <div className="header">
            <p>Checkpoints Cleared</p>
          </div>
          <p>2/5</p>
          <div className="block-content">
            <p>Total Attempts: 4</p>
          </div>
        </div>
        <div className="block block-three">
          <p className="streak">Streak : 8 days</p>
          <div className="remarks">
            <p>
              Excellent performance! Demonstrating good understanding at the
              intermediate stage. Consistency is key, and you're on the right
              track. Keep challenging yourself!
            </p>
          </div>
        </div>
      </div>
      <div className="row-two">
        <div className="block-four">
          <div className="slab slab-one">
            <div className="slab-header">
              <FaTasks size={24} color="#fff" />
              <p className="excercise-number">Excercise #4B</p>
            </div>
            <div className="score-section">
            <p>24 xp</p>
            </div>
          </div>
          <div className="slab slab-two">
          <div className="slab-header">
              <FaTasks size={24} color="#fff" />
              <p className="excercise-number">Excercise #4A</p>
            </div>
            <div className="score-section">
              <p>28 xp</p>
            </div>
          </div>
          <div className="slab slab-three">
          <div className="slab-header">
              <FaTasks size={24} color="#fff" />
              <p className="excercise-number">Excercise #3D</p>
            </div>
            <div className="score-section">
            <p>28 xp</p>
            </div>
          </div>
        </div>
        <div className="block block-five">
        </div>
      </div>
    </>
  );
};

export default Dashboard;
