import React, { useState } from 'react';
import '../assets/Styles/BidSection.css';

const BidSection = () => {
  const [bid, setBid] = useState(10500);

  const handleIncreaseBid = () => {
    setBid(bid + 500);
  };

  const handleDecreaseBid = () => {
    setBid(bid > 500 ? bid - 500 : bid);
  };

  return (
    <div className="bid-section-container">
      <div className="bid-card">
        <h5 className="bid-title">Enter Your Bid</h5>

        <div className="bid-timer">
          <span>Elapsed Time:</span>
          <div className="timer-display">
            <span>00</span>:<span>22</span>:<span>43</span>:<span>10</span>
            <small>Hrs</small>
            <small>Mins</small>
            <small>Sec</small>
            <small>Fps</small>
          </div>
        </div>

        <div className="bid-price">
          <p>Current Price: <strong>9000 SAR</strong></p>
        </div>

        <div className="bid-controls">
          <button className="bid-button" onClick={handleDecreaseBid}>-</button>
          <div className="bid-amount">
            <input type="text" value={`${bid} SAR`} readOnly />
          </div>
          <button className="bid-button" onClick={handleIncreaseBid}>+</button>
        </div>

        <p className="bid-winner">
          Current Winner: <strong>Mohammad ZTR</strong>
        </p>
      </div>
    </div>
  );
};

export default BidSection;
