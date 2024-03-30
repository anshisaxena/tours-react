import React from 'react';
import ProductItem from'./productitem';
import Card from './Card';
const Product=(props)=>{
    return(
    <Card classname="products"> 
        <ProductItem>
            title={props.items[0].title}
            date={props.items[0].date}
        </ProductItem>
        <ProductItem>
            title={props.items[1].title}
            date={props.items[1].date}
        </ProductItem>
    
    </Card>
    );
}
export default Product;