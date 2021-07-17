import React from 'react'
import './Itemflipper.css'

class Itemflipper extends React.Component{
    constructor(props){
        super(props);
        this.state={
            amount:0,
        }
        this.handleClick=this.handleClick.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    handleClick(event){
        event.preventDefault();
        console.log(this.state.amount)
    }
    
    handleChange(event){
        this.setState({amount:event.target.value},function(){
            console.log(this.state.amount)
        })
    }

    render(){
        return(
            <div className="flipper-display">
                <h1 className="flip-text">Item Flipper</h1>
                <form className="money amount">
                        <input type="text" placeholder="Amount you want to flip" className="item-input" value={this.state.amount} onChange={this.handleChange}/>
                        <button type="button"  onClick={this.handleClick}>Calculate</button>
                </form>
            </div>
        )
    }
}
export default Itemflipper