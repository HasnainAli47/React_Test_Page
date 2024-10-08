import React from 'react';
import '../assets/Styles/AuctionQueue.css';
import carImage1 from '../assets/images/car1.jpg';
import carImage2 from '../assets/images/car2.jpg';
import carImage3 from '../assets/images/car3.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const AuctionQueue = () => {
  const cars = [
    {
      id: 1,
      model: 'MERCEDES-BENZ C-CLASS 2015',
      price: 'SAR 5000',
      mileage: '75000 km',
      engine: 'Petrol',
      transmission: 'Automatic',
      image: carImage1,
      startIn: '03:23:45'
    },
    {
      id: 2,
      model: 'BMW 3-Series 2016',
      price: 'SAR 6000',
      mileage: '70000 km',
      engine: 'Electric',
      transmission: 'Automatic',
      image: carImage2,
      startIn: '02:23:45'
    },
    {
      id: 3,
      model: 'Audi A4 2017',
      price: 'SAR 7000',
      mileage: '79000 km',
      engine: 'Diesel',
      transmission: 'Automatic',
      image: carImage3,
      startIn: '01:23:45'
    }
  ];

  return (
    <div className="auction-queue">
      <h2>Upcoming Cars in the Auction Queue</h2>
      {cars.map(car => (
        <div key={car.id} className="car-item">
          <img src={car.image} alt={car.model} className="car-image" />
          <div className="car-details">
            <h6>{car.model}</h6>
            <div className="car-specs">
              <div>
                <p className="price">{car.price}</p>
                <p>Mileage: {car.mileage}</p>
              </div>
              <div>
                <p>Engine: {car.engine}</p>
                <p>Transmission: {car.transmission}</p>
              </div>
            </div>
            <p className="start-time d-flex justify-content-center">Start In: </p>
            <p className="start-time d-flex justify-content-center">{car.startIn}</p>
          </div>
        </div>
      ))}
      <div className="pagination d-flex justify-content-center align-items-center">
      <FaChevronLeft className="chevron-icon" />
        <span className="page-numbers">1</span>
        <span className="page-numbers">2</span>
        <span className="page-numbers">...</span>
        <span className="page-numbers">10</span>
        <FaChevronRight className="chevron-icon" />
      </div>
    </div>
  );
};

export default AuctionQueue;
