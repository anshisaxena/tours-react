import Card from './cards';

function Tours({tours,removeHandler})
{
    return(<div className='contain'>
        <div>
            <h1 className='title'>Plan with love</h1>
        </div>
        <div className='cards'>
        {
            tours.map((tour)=>{
                return (<Card {...tour} removeHandler={removeHandler}></Card>);

            })
            
        }

        </div>
        
    </div>);
}
export default Tours;
