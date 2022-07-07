import React from 'react';

const ResultsShow = ({resul}) => {
  
    return (
       <div>
<div class="card-body text-center">
                <h2 class="text-xl font-bold text-secondary">Results of Class Six is Here</h2>
                <p>{resul.class}</p>
                <p>{resul.newClassRoll}</p>
                <p>{resul.totalNumber}</p> 
            </div>
       </div>
    );
};

export default ResultsShow;