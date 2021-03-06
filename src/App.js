import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Pages/index.jsx';
import NotFoundPage from './Pages/404.jsx';
import AuctionHouse from './Pages/auction-house.jsx';
import Bazaar from './Pages/bazaar.jsx';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

const fetch = require('node-fetch');
let API_FILE = require('./API_KEY.json');

let API_KEY = API_FILE["API_KEY"];

const playerName = "CurrentlyKuais";
const playerUUID = "9aa48ce9-4801-4678-b6f5-423288cddad0";


class App extends React.Component {
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
        console.log(data);
      }
    })
    .catch(error => console.log("Network Error", error));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  

  render() {

    let { isLoaded, item } = this.state;

    if(!isLoaded) {
      return (
          <div>
            Loading...
          </div>
      );
    } else {
      return (
        <Router>
          <Switch>
            <Route exact path = "/" component = { MainPage } />
            <Route exact path = "/Home" component = { MainPage } />
            <Route exact path = "/Bazaar" component = { Bazaar } component = {() => <Bazaar props={this.state.items}/>}/>
            <Route exact path = "/Auction" component = { AuctionHouse } />
            <Route exact path = "/404" component = { NotFoundPage } />
            <Redirect to = "/404" />
          </Switch>
        </Router>
      );
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;