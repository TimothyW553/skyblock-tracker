import React from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';

class Navbar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isClicked: [false,false,false]
    }
  }
  /*logic to highlight the clicked button, with a fucntion to update the setstate */
  handleClick=(index)=>{
    let arrvar=this.state.isClicked.fill(false)
    arrvar[index]=true
    this.setState({isClicked:arrvar},function(){
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
              {/*logic to set background color of the button */}
                <a href={item.url}>
                 <button className={item.cName}  onClick={()=>this.handleClick(index)} style={this.state.isClicked[index]?{backgroundColor:'#6d76f7'}:{}}>
                      {item.title}
                  </button>
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