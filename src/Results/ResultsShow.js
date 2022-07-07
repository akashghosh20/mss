import React from 'react';

const ResultsShow = ({result}) => {
  
    return (
       <div>
<div class="card-body text-center">
                <h2 class="text-xl font-bold text-secondary">Results of Class Six is Here</h2>
                <p>{result.class}</p>
                <p>{result.newClassRoll}</p>
                <p>{result.totalNumber}</p> 
            </div>
       </div>
    );
};

export default ResultsShow;