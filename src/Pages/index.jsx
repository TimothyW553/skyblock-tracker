import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>
          Hello!
        </h1>
      </div>
    );
  }
}

export default MainPage;