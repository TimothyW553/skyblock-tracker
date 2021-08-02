import React from 'react';
import './Itemdisplay.css';
import Item from './Item';
import { update } from 'lodash';

class Itemdisplay extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.dataPToC,
            search:'',
            filteredData:[]
        }
        this.handleChange=this.handleChange.bind(this);
        const sortTypes = {
            up: {
                class: 'sort-up',
                fn: (a, b) => a.net_worth - b.net_worth
            },
            down: {
                class: 'sort-down',
                fn: (a, b) => b.net_worth - a.net_worth
            },
            default: {
                class: 'sort',
                fn: (a, b) => a
            }
        };
    }
    
    /*handle change method for the input*/
    handleChange(event){
        /*function() to update the callback as setstate does not update the search state immediately, which will cause the search to be delayed by one mutation*/
        this.setState({search:event.target.value}, function(){
            this.setState(prevState=>{
                /*makes a filteredData object that will be dynamically changed as the user provides input*/
                    const filteredData=Object.entries(prevState.data.products).filter(element=>{
                        return element[1].product_id.toString().toLowerCase().replaceAll("_"," ").includes(this.state.search.toLowerCase().replace("_"," "))
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
                <table>
                    
                        <thead>
                            <tr>
                                <th >Item</th>
                                <th >Quick Buy</th>
                                <th >Quick Sell</th>
                                <th >7 Day Total Volume</th>
                                <th>Profit Ratio</th>
                                <th>Profit Difference</th>
                            </tr>
                        </thead>
                        <tbody>
                        { 
                        /*ternary operator that checks if nothing is in the search, which will display all the items, and once the user starts typing,
                        it will switch to the filtered data*/
                            this.state.search===""?Object.entries(this.state.data.products).map((item)=> 
                                <tr key={item}>
                                    {console.log(item[1].sell_summary[0]==undefined?"yes":"no")}
                                    <td ><a href={"#"+item[1].product_id} style={{ textDecoration: 'none' }}>{item[1].product_id.replaceAll("_"," ")}</a></td>
                                    <td >{item[1].buy_summary[0]===undefined?"unavailable":item[1].buy_summary[0].pricePerUnit}</td>
                                    <td >{item[1].sell_summary[0]===undefined?"unavailable":item[1].sell_summary[0].pricePerUnit}</td>
                                    <td >buy: {item[1].quick_status.buyMovingWeek} sell: {item[1].quick_status.sellMovingWeek}</td>
                                    <td>{((item[1].quick_status.buyPrice.toFixed(1)/item[1].quick_status.sellPrice.toFixed(1))*100).toFixed(1).toString()+"%"}</td>
                                    <td>{(item[1].quick_status.buyPrice.toFixed(1)-item[1].quick_status.sellPrice.toFixed(1)).toFixed(1)}</td>
                                </tr>
                            ):
                            this.state.filteredData.map((item)=> 
                                <tr key={item} className="all-items">
                                    <td ><a href={"#"+item[1].product_id} style={{ textDecoration: 'none' }}>{item[1].product_id.replaceAll("_"," ")}</a></td>
                                    <td >{item[1].buy_summary[0]===undefined?"unavailable":item[1].buy_summary[0].pricePerUnit}</td>
                                    <td >{item[1].sell_summary[0]===undefined?"unavailable":item[1].sell_summary[0].pricePerUnit}</td>
                                    <td className="total-buy-to-sell-volume">buy: {item[1].quick_status.buyMovingWeek} sell: {item[1].quick_status.sellMovingWeek}</td>
                                    <td>{(item[1].quick_status.buyPrice.toFixed(1)/item[1].quick_status.sellPrice.toFixed(1)).toFixed(1)}</td>
                                    <td>{(item[1].quick_status.buyPrice.toFixed(1)-item[1].quick_status.sellPrice.toFixed(1)).toFixed(1)}</td>
                                </tr>
                            )
                        }
                        </tbody>
                </table>
            </div>


        )
    }
}

export default Itemdisplay