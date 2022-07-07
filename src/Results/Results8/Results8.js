import React, { useEffect, useState } from 'react';
import Results8Show from './Results8Show';

const Results8 = () => {

    const [results8, setResult8] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/results8')
            .then(res => res.json())
            .then(data => setResult8(data));
    }, [])
    return (
        <div className='my-10'>
        <h4 className='text-3xl text-secondary text-center my-12 font-bold'>Results of Class Eight </h4>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
               results8.map(result8 => <Results8Show
                   key={result8._id}
                   result8={result8}
                   setResult8={setResult8}
               ></Results8Show>)
           }
       </div>
   </div>
    );
};

export default Results8;