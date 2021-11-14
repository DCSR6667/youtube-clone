import {useRef} from 'react';
import './style.module.css';
import youtube from './api';
import {useContext} from 'react';
import con from './context';
const Search=()=>
{
    const input=useRef();
    const context=useContext(con);

    const submithandler= async (e)=>
    {
        e.preventDefault();
         const response=await youtube.get('/search',
        {
            params:{
                q:e.target[0].value
            }
        });
        context.data(response.data.items);  

    };
        return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className='col-9 col-md-5'>
                    <form onSubmit={submithandler}>
                        <input type="text" ref={input}  name="search" className="border py-2 shadow rounded"/>
                        
                        
                    </form>
                </div>
            </div>

        </div>

    )

};
export default Search;