import React from 'react'

const Item = ({name,price}) => {
    return (
        <div className="item-container">
            <div className="item-row">
                <div className="item">
                    <h1>
                        {name}
                    </h1>
                    <p className="item-icon">
                        {/*to be implemented*/}
                    </p>
                </div>
                <div className="item-data">
                    <p className="item-price">${price}</p>
                    <p className="item-volume">{/*volume.toLocaleString(), to be implemented*/}</p>
                </div>
            </div>    
        </div>
    )
}

export default Item