import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

const fetch = require('node-fetch');
let API_FILE = require('../API_KEY.json');

let API_KEY = API_FILE["API_KEY"];

const playerName = "CurrentlyKuais";
const playerUUID = "9aa48ce9-4801-4678-b6f5-423288cddad0";

class AuctionHouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  
  _isMounted = false;

  componentDidMount() { // this method runs after the render() method, then updates the render method
    this._isMounted = true;
    fetch(`https://api.hypixel.net/skyblock/bazaar?key=${API_KEY}&name=${playerUUID}`) // back ticks to use ${}
    .then(res => res.json()) // take our response (in bytes) and turn it to a JSON
    .then(data => {
      if(this._isMounted) {
        this.setState({
          isLoaded: true,
          items: data,
        });
      }
    })
    .catch(error => console.log("Network Error", error));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    let isLoaded = this.state.isLoaded;
    let items = this.state.items.products;

    if(!isLoaded) {
      return (
          <div>
            Loading...
          </div>
      );
    } else {
      Object.keys(items).map((item, index) => {
        console.log(items[item].quick_status.sellPrice);
      });
      return (
        <div className = "AuctionHouse">
          <Navbar />
          {Object.keys(items).map((item, index) => {
            return (
              <li key = {index}>
                {items[item].product_id} - {items[item].quick_status.sellPrice}
              </li>
            );
          })}
        </div>
      );
    }
  }
}

export default AuctionHouse;