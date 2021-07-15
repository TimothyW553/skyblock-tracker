import React from 'react';
import './Itemdisplay.css';
import Item from './Item';
import { update } from 'lodash';

class Itemdisplay extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.dataParentToChild,
            search:'',
            filteredData:[]
        }

        this.handleChange=this.handleChange.bind(this);
    }
    /*handle change method for the input*/
    handleChange(event){
        /*function() to update the callback as setstate does not update the search state immediately, which will cause the search to be delayed by one mutation*/
        this.setState({search:event.target.value}, function(){
            this.setState(prevState=>{
                /*makes a filteredData object that will be dynamically changed as the user provides input*/
                    const filteredData=Object.entries(prevState.data.products).filter(element=>{
                        return element[1].product_id.toString().toLowerCase().replace("_"," ").includes(this.state.search.toLowerCase().replace("_"," "))
                    })
                    this.setState({
                        filteredData
                    }
                    )
            })
        })
        /*make a filtered data to display dynamically as the user types in the search bar*/


    }

    render(){
        return(
            <div className="item-display">
                <div>
                    <h1 className="item-text">
                        Search Item: 
                    </h1>
                    <form className="search-bar">
                        <input type="text" placeholder="Search" className="item-input" onChange={this.handleChange}/>
                    </form>
                </div>
                <div className="displayed-items">
                { 
                /*ternary operator that checks if nothing is in the search, which will display all the items, and once the user starts typing,
                it will switch to the filtered data*/
                    this.state.search===""?Object.entries(this.state.data.products).map((item)=> 
                        <p key={item}><a href={"#"+item[1].product_id} style={{ textDecoration: 'none' }}>{item[1].product_id.replaceAll("_"," ")}</a></p>
                    ):
                    this.state.filteredData.map((item)=> 
                        <p key={item}><a href={"#"+item[1].product_id} style={{ textDecoration: 'none' }}>{item[1].product_id.replaceAll("_"," ")}</a></p>
                    )
                }
                </div>
            </div>

        )
    }
}

export default Itemdisplay