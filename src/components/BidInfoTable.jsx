import React from 'react';
import '../assets/Styles/BidInfoTable.css';

const BidInfoTable = () => {
  const bidData = [
    { name: 'Ali', bidAmount: '10,500 SAR', time: '10:32:15' },
    { name: 'Hassan', bidAmount: '11,000 SAR', time: '10:34:20' },
    { name: 'Zain', bidAmount: '12,000 SAR', time: '10:36:05' },
  ];

  return (
    <div className="bid-info-table">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Bid Amount</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {bidData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.bidAmount}</td>
              <td>{data.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidInfoTable;
