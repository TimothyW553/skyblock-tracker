import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

class Bazaar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className = "Bazaar">
        <Navbar />
        <h1>Bazaar things are going on...</h1>
      </div>
    );
  }
}

export default Bazaar;