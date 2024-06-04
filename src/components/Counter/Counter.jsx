import React from 'react';

const Counter = ({time}) => {
    return (
        <div className='sticky border-[#6047EC] border-2 rounded-md mb-16'>
            <p className='p-5 text-2xl font-bold'>Spent time on read : {time}</p>
        </div>
    );
};

export default Counter;