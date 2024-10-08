import React from 'react';
import '../assets/Styles/VehicleInfo.css';

const VehicleInfo = () => {
  return (
    <div className="vehicle-info-container">
      <div className="vehicle-info-card">
        <h5 className="vehicle-info-title">VEHICLE INFORMATION</h5>
        <div className="vehicle-info-grid">
          <div className="vehicle-info-column">
            <p><strong>Document Type:</strong> VCC</p>
            <p><strong>Primary Damage:</strong> Minor Dent/ Scratches</p>
            <p><strong>Cylinders:</strong> 8</p>
            <p><strong>Specification:</strong> American</p>
            <p><strong>Keys:</strong> Yes</p>
            <p><strong>Exterior Color:</strong> White</p>
            <p><strong>Drive Type:</strong> AWD</p>
            <p><strong>Highlights 1:</strong> Run & Drive</p>
          </div>
          <div className="vehicle-info-column">
            <p><strong>Odometer:</strong> 45,674 Miles</p>
            <p><strong>Secondary Damage:</strong> None</p>
            <p><strong>Engine Type:</strong> 5.7L</p>
            <p><strong>Transmission:</strong> Automatic</p>
            <p><strong>Fuel:</strong> Petrol</p>
            <p><strong>Body Style:</strong> SUV</p>
            <p><strong>Test Drive:</strong> No</p>
            <p><strong>Highlights 2:</strong> Ready</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;
