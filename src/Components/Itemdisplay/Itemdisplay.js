import React, {useState,useEffect} from 'react';
import './Itemdisplay.css';
import Item from './Item';
import { update } from 'lodash';

class Itemdisplay extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.dataParentToChild,
            items:[],
            search:'',
            filteredData:[]
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({search:event.target.value}, function(){
            console.log(this.state.search);
        })
        this.setState(prevState=>{
                const filteredData=Object.entries(prevState.data.products).filter(element=>{
                    return element[1].product_id.toLowerCase().replace("_"," ").includes(this.state.search.toLowerCase().replace("_"," "))
                })
                this.setState({
                    filteredData
                }
                )
        })
    }
    handleSubmit(event){
        this.setState({search:event.target.value})
        event.preventDefault()

    } 
    render(){
        const {data}=this.state

        return(
            <div className="Itemdisplay">
                <div className="Item-search">
                    <h1 className="item-text">
                        Search Item
                    </h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Search" className="item-input" onChange={this.handleChange}/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                {
                    this.state.filteredData.map((item)=> 
                        <p key={item}>{item[1].product_id}</p>
                    )
                }
            </div>

        )
    }
}

export default Itemdisplay