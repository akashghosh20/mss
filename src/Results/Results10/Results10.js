import React, { useEffect, useState } from 'react';
import Results10Show from './Results10Show';

const Results10 = () => {
    const [results10, setResult10] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/results10')
            .then(res => res.json())
            .then(data => setResult10(data));
    }, [])
    return (
        <div className='my-10'>
        <h4 className='text-3xl text-secondary text-center my-12 font-bold'>Results of Class Ten </h4>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
               results10.map(result10 => <Results10Show
                   key={result10._id}
                   result10={result10}
                   setResult10={setResult10}
               ></Results10Show>)
           }
       </div>
   </div>
    );
};

export default Results10;