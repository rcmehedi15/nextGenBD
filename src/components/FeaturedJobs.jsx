import React from 'react';

const FeaturedJobs = ({job}) => {
    const {logo,job_title,job_type,job_time,address,company,salary} = job;
    return (
        <>    
        
                
              
                    <div className="card w-96 border-solid border-2 border-gray-200 ">
                        <img src={logo} alt="" className='card-body  m-4 rounded-lg w-48' />
                        <div className="p-4">
                            <h2 className="card-title text-2xl">{job_title}</h2>
                            <p className='text-gray-700'>{company}</p>
                            <div className='flex gap-4 items-center text-center my-3 '>
                            <p className='text-blue-500 border-solid border-2 border-gray-200  w-24 rounded-lg p-1'>{job_type}</p>
                            <p className='text-blue-500 border-solid border-2 border-gray-200 w-24 rounded-lg p-1' >{job_time}</p>
                            </div>
                            <p className='text-gray-700'>{address}</p>
                            <p className='text-gray-700'>{salary}</p>

                        </div>
                    </div>
                
           
        </>
    );
};

export default FeaturedJobs;