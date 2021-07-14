import React from 'react';
import {MenuItems} from "./MenuItems";
import './Navbar.css';

class Navbar extends React.Component{
  state={isClicked:false}
  
  handleClick=()=>{
    this.setState({isClicked:!this.state.isClicked})
  }

    render(){
      return(
        <nav className="NavbarItems">
          <h1 className="logo">Skyblock tracker<i className="logo"></i></h1>
            <div className="icon" onClick={this.handleClick}>
              
            </div>
          <ul className="nav-menu">
            {MenuItems.map((item,index)=>{
                return(
                  <li key={index}> 
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                )
            })}
          </ul>
        </nav>
  
      );
    }
  }

  export default Navbar