import React from 'react';
import './DistributorCard.css';
import { FaShippingFast, FaChartLine } from 'react-icons/fa';

function DistributorCard({ data }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front">
          <h2>{data.name}</h2>
          <div className="metric">
            <FaShippingFast className="icon" />
            <p>Shipped Last Month: {data.shippedLastMonth}</p>
          </div>
          <div className="metric">
            <FaChartLine className="icon" />
            <p>Forecasted Next Month: {data.forecastedNextMonth}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <h2>{data.name}</h2>
          <p>Year-to-Date Avg:</p>
          <h3>{data.avgShippedPerMonth}</h3>
          <p>Keep up the great work!</p>
        </div>
      </div>
    </div>
  );
}

export default DistributorCard;
