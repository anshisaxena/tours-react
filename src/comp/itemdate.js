import './itemdate.css'
function Itemdate(props)
{
    const day=props.day;
    const date=props.month;
    const year=props.year;
    return(<div>
        <span>{day} </span>
        <span>{date}</span>
        <span>{year}</span>
        </div>
    );
}
export default Itemdate;