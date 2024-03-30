import React from 'react';
const Card =(props)=>{
    const classes='card'+props.ClassName;
    return(<div className={classes}>
        {props.Children}
    </div>);
};
export default Card;
