import React from 'react';
import ReactDOM from 'react-dom';

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
    this._isMounted = false;
  }

  async getJSON() {
    await fetch(`https://api.hypixel.net/skyblock/bazaar?key=${API_KEY}&name=${playerUUID}`) // back ticks to use ${}
      .then(res => res.json()) // take our response (in bytes) and turn it to a JSON
      .then(data => {
        this.setState({
          isLoaded: true,
          items: data,
        });
        console.log(data);
      })
      .catch(error => console.log("Network Error", error));
  }

  componentDidMount() { // this method runs after the render() method, then updates the render method
    this._isMounted = true;
    this._isMounted && this.getJSON();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    let { isLoaded, item } = this.state;

    if(!isLoaded) {
      return (
        <div>Loading...</div>
      );
    } else {
      return (
        <div className = "App">
          <ul>
            {/* {item.map(item => ( // map function creates a new array with the 
                                 // result of every return in the array element
              <li key = {item.id}>
                Name: {item.name} | Email: {item.email}
              </li>
            ))}; */}
          </ul>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;