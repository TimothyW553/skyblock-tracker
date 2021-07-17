import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

class AuctionHouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div className = "AuctionHouse">
        <Navbar />
        <h1>Who's ready to auction?</h1>
      </div>
    );
  }
}

export default AuctionHouse;