import React from 'react';
import Itemdisplay from '../Components/Itemdisplay/Itemdisplay';
import Navbar from '../Components/Navbar/Navbar';

class Bazaar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:this.props.dataForComponent
    }
  }
  render() {
    return (
      <div className = "Bazaar">
        <Navbar/>
        <Itemdisplay  dataPToC={this.state.data}/>
      </div>
    );
  }
}

export default Bazaar;