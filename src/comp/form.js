import './form.css';
function Form()
{
    
    return(
        <form className='form'>
            <div className='title'
            ><label>title</label>
            <input type='text' />
            </div>
            <div className='date'
            ><label>date</label>
            <input type='date'/>
            </div>
            <div class>
            <button type='submit'>add product</button>
            </div>
        </form>
    );
}
export default Form;