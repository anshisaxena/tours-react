import { useState } from "react";

function Card({id,image,info,price,name,removeHandler})
{
    const [readmore,setReadmore]=useState(false);
    const description=readmore? info:`${info.substring(0,200)}....`;
    
    function readHandler()
    {
        setReadmore(!readmore);
    }
    
    return(
        <div className="card">
            <img src={image} className="im" alt="related"></img>
            <div className="info">
            <div className="details">
                <h4 className="price">₹ {price}</h4>
                <h4 className="name">{name}</h4>

            
            
            </div>
            <div className="description">
                {description}
                <span className="more" onClick={readHandler}>
                {readmore?`show-less`:`show-more`}
                </span></div>
            </div>

        <button className="btn" onClick={()=>removeHandler(id)}>Not Interested</button>
        </div>
    );

}
export default Card;