import React from 'react';

const ResultsShow = ({result}) => {

    const {Name,Class,TotalMarks,NewClassRoll}=result;

   
  
    return (
      
    <div class="card w-96 bg-base-100 shadow-xl image-full">
       
        <div class="card-body">
          <h2 className="text-center text-primary">{Name}</h2>
          <p className='text-white'>Class:{Class}</p>
          <p className='text-white'>Obtained Marks:{TotalMarks}</p>
          <p className='text-white'>New Class Roll: {NewClassRoll}</p>
          
        </div>
      </div>
    );
};

export default ResultsShow;