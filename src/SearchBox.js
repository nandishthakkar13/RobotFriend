import React from 'react';
import './SearchBox.css';
const SearchBox = ({SearchChange}) =>{
    return(
        <div className='pa3 '>
        <input className='searchbox' type='search' placeholder='search robots' onChange={SearchChange}/>
        </div>
    );
}

export default SearchBox;