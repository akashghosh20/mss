import React, { useEffect, useState } from 'react';
import Results9Show from './Results9Show';

const Results9 = () => {

    const [results9, setResult9] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/results9')
            .then(res => res.json())
            .then(data => setResult9(data));
    }, [])
    return (
        <div className='my-10'>
        <h4 className='text-3xl text-secondary text-center my-12 font-bold'>Results of Class Nine </h4>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
               results9.map(result9 => <Results9Show
                   key={result9._id}
                   result9={result9}
                   setResult9={setResult9}
               ></Results9Show>)
           }
       </div>
   </div>
    );
};

export default Results9;