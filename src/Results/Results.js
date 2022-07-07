import React, { useEffect, useState } from 'react';

const Results = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch('results.json')
            .then(res => res.json())
            .then(data => setResults(data));
    }, [])
     

    return (
        <div>
            
        </div>
    );
};

export default Results;