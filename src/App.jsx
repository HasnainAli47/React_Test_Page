// src/App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import BreadcrumbComponent from './components/Breadcrumb';
import CarDetails from './components/CarDetails';
import VehicleInfo from './components/VehicleInfo';
import BidSection from './components/BidSection';
import AuctionQueue from './components/AuctionQueue';
import Footer from './components/Footer';
import Advertisement from './components/Advertisment';
import BidInfoTable from './components/BidInfoTable';

const App = () => {
  return (
    <div className="app">
    <div style={{ width: '100%' }}>
      <Header />
    </div>
      <BreadcrumbComponent />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <CarDetails />
          </div>
          <div className="col-md-6">
            <VehicleInfo />
            <BidSection />
          </div>
        </div>
        {/* <BidInfoTable /> */}
        <AuctionQueue />
      </div>
      <Advertisement />
      <Footer />
    </div>
  );
};

export default App;
