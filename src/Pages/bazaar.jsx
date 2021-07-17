import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Itemdisplay from '../Components/Itemdisplay/Itemdisplay';

class Bazaar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:this.props.props
    }
  }
  render() {
    return (
      <div className = "Bazaar">
        <Navbar />
        <Itemdisplay dataParentToChild={this.state.items}/>
      </div>
    );
  }
}

export default Bazaar;