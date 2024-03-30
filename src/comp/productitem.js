import Card from './Card';
import React from 'react';
const ProductItem=(props)=>{
    return (
        <Card className="item">
            <div className="date"><h1>{props.date}</h1></div>
            <div className='title'>
            <h2>{props.title}</h2> </div>

        </Card>
    );
}
export default ProductItem;