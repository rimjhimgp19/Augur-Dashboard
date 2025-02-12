import React from 'react';
import './App.css';
import DistributorCard from './components/DistributorCard';

const distributors = [
  {
    name: "Distributor A",
    shippedLastMonth: 120,
    forecastedNextMonth: 150,
    avgShippedPerMonth: 130,
  },
  {
    name: "Distributor B",
    shippedLastMonth: 85,
    forecastedNextMonth: 95,
    avgShippedPerMonth: 90,
  },
  {
    name: "Distributor C",
    shippedLastMonth: 200,
    forecastedNextMonth: 220,
    avgShippedPerMonth: 210,
  },
];

function App() {
  return (
    <div className="container">
      <h1 className="title">Distributor Dashboard</h1>
      <div className="distributor-list">
        {distributors.map((distributor, index) => (
          <DistributorCard key={index} data={distributor} />
        ))}
      </div>
    </div>
  );
}

export default App;
