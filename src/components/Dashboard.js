import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import './Dashboard.css';

const Dashboard = () => {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [12000, 19000, 3000, 5000, 2000, 30000],
        backgroundColor: '#6c63ff',
      },
    ],
  };

  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Processed Documents',
        data: [50, 80, 150, 120],
        borderColor: '#ff6f61',
        fill: false,
      },
    ],
  };

  const doughnutData = {
    labels: ['Approved', 'Pending', 'Rejected'],
    datasets: [
      {
        label: 'Case Distribution',
        data: [60, 25, 15],
        backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Medical Billing Dashboard</h2>
        <p>Overview of your billing activity and analytics</p>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3>Total Revenue</h3>
          <div className="revenue">
            <p>$120,000</p>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Pending Cases</h3>
          <div className="cases">
            <p>35</p>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Processed Documents</h3>
          <div className="documents">
            <p>150</p>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Revenue Growth</h3>
          <div className="growth-chart">
            <Bar data={barData} />
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Document Processing Over Time</h3>
          <div className="line-chart">
            <Line data={lineData} />
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Case Status Distribution</h3>
          <div className="doughnut-chart">
            <Doughnut data={doughnutData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
