import React, { useEffect, useState } from 'react';
import ResultsShow from './ResultsShow';

const Results = () => {
    const [results, setResult] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/results')
            .then(res => res.json())
            .then(data => setResult(data));
    }, [])
     

    return (
        <div className='my-10'>
             <h4 className='text-3xl text-secondary text-center my-12 font-bold'>Results of Class Six </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    results.map(result => <ResultsShow
                        key={result._id}
                        result={result}
                        setResult={setResult}
                    ></ResultsShow>)
                }
            </div>
        </div>
    );
};

export default Results;