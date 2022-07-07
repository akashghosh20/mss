import React from 'react';

const ResultsShow = ({result}) => {

   
  
    return (
      
    <div class="card w-96 bg-base-100 shadow-xl image-full">
       
        <div class="card-body">
          <h2 className="text-center text-primary">{result.Name}</h2>
          <p>Obtained Marks:{result.TotalMarks}</p>
          
        </div>
      </div>
    );
};

export default ResultsShow;