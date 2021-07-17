import React from 'react'
import './Itemflipper.css'

class Itemflipper extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="flipper-display">
                <h1 className="flip-text">Item Flipper</h1>
                <form className="money amount">
                        <input type="text" placeholder="Amount you want to flip" className="item-input" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}
export default Itemflipper