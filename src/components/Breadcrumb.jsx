import React from 'react';
import { Breadcrumb, Row, Col } from 'react-bootstrap';
import '../assets/Styles/BreadcrumbComponent.css';

const BreadcrumbComponent = () => {
  return (
    <div className="mt-5 breadcrumb-container">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Showroom</Breadcrumb.Item>
        <Breadcrumb.Item active>MERCEDES-BENZ C-Class 2015</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col>
          <h4 className="car-name">MERCEDES-BENZ C-Class 2015</h4>
          <p className="car-info">VIN-ASlKJDAKSJLD | ITEM NO: 231</p>
        </Col>
      </Row>
    </div>
  );
};

export default BreadcrumbComponent;
