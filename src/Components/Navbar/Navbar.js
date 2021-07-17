import React from 'react';
import { MenuItems } from "./MenuItems";
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    }
  }
  
  handleClick=()=>{
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render(){
    return (
      <nav className="NavbarItems">
        <h1 className="logo">Skyblock</h1>
        <ul className="nav-menu">
          {MenuItems.map((item,index) => {
            return (
              <li key={index}> 
                <Link to = {item.url} className = {item.cName}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar