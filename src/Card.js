import React from 'react';


const Card = ({name, email, id}) =>{
    /*props = {name, email, id} As we destructure it right in the paramaters
    we can use it directly in the code as name email instead of
    doing props.name and props.email*/

    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robot' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;