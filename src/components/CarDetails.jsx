import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import car1 from '../assets/images/car1.jpg';
import car2 from '../assets/images/car2.jpg';
import car3 from '../assets/images/car3.jpg';
import '../assets/Styles/CarDetails.css';

const CarDetails = () => {
  const images = [car1, car2, car3];

  return (
    <div className="car-details">
      <Carousel>
        {images.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              src={img}
              alt={`Car ${index + 1}`}
              className="d-block w-100 fixed-height-image"
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="thumbnail-container mt-3 d-flex align-items-center">
        <FaChevronLeft className="chevron-icon" />
        <div className="thumbnail-images d-flex mx-3">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail-image mx-1"
            />
          ))}
        </div>
        <FaChevronRight className="chevron-icon" />
      </div>
    </div>
  );
};

export default CarDetails;
