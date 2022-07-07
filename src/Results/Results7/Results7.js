import React, { useEffect, useState } from 'react';
import Results7Show from './Results7Show';

const Results7 = () => {

        const [results7, setResult7] = useState([]);
    
        useEffect(() => {
            fetch('http://localhost:5000/results7')
                .then(res => res.json())
                .then(data => setResult7(data));
        }, [])
         
    return (
        <div className='my-10'>
        <h4 className='text-3xl text-secondary text-center my-12 font-bold'>Results of Class Six </h4>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
               results7.map(result7 => <Results7Show
                   key={result7._id}
                   result7={result7}
                   setResult7={setResult7}
               ></Results7Show>)
           }
       </div>
   </div>
    );
};

export default Results7;