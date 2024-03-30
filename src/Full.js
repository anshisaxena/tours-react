import Tours from './comp/tours';
import data from './comp/data';
import React ,{useState} from 'react';

const Full=()=>
{
  
    const [tours,setTours]=useState(data);
   
    function removeHandler(id)
    {
     const newtr=tours.filter(tour=>tour.id!==id);
     setTours(newtr);
    }
    
    if(tours.length===0)
    {
      return(
        <div className='no-cards'>
        <h2>No Tours Left</h2>
        <button className='refresh' onClick={()=>setTours(data)}>Refresh</button>

      </div>
      );
    }


  return(
    <div>
      
      <Tours tours={tours} removeHandler={removeHandler}></Tours>
    </div>

  )
};

export default Full;