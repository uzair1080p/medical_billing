import React from 'react';
import { Bar } from 'react-chartjs-2';

const RevenueAnalytics = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Revenue',
        backgroundColor: '#6a0dad',
        borderColor: '#6a0dad',
        data: [12000, 15000, 10000, 18000, 13000],
      },
    ],
  };

  return (
    <div className="page revenue-analytics">
      <h2>Revenue Analytics</h2>
      <Bar data={data} />
    </div>
  );
};

export default RevenueAnalytics;
