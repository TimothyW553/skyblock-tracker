import React, {useState,useEffect} from 'react';
import './Itemdisplay.css';
import Item from './Item';

class Itemdisplay extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.dataParentToChild,
            items:[],
            search:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }S
    handleChange(event){
        this.setState({search:event.target.value})
    }
    handleSubmit(event){
        alert("submitted: "+this.state.search)
    }
    render(){
        const {data}=this.state
        const test=data.products


        console.log(test)
        return(
            <div className="Itemdisplay">
                <div className="Item-search">
                    <h1 className="item-text">
                        Search Item
                    </h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Search" className="item-input" value={this.state.search} onChange={this.handleChange}/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div>
                {
                    Object.entries(data.products).map((item)=> 
                        <p key={item}>{item["1"].product_id}</p>
                    )
                }
                </div>
            </div>

        )
    }
}

export default Itemdisplay