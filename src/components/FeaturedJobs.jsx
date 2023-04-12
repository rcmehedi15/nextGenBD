import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom';

const FeaturedJobs = ({ job }) => {
   
    const { _id, logo, job_title, job_type, job_time, address, company, salary } = job;
    
    return (
        <>

            <div className="card w-full border-solid border-2 border-gray-200 ">
                <img src={logo} alt="" className='  m-4 rounded-lg w-32' />
                <div className="p-4">
                    <h2 className="card-title text-2xl">{job_title}</h2>
                    <p className='text-gray-700'>{company}</p>
                    <div className='flex gap-4 items-center text-center my-3 '>
                        <p className='text-blue-500 border-solid border-2 border-gray-200  w-24 rounded-lg p-1'>{job_type}</p>
                        <p className='text-blue-500 border-solid border-2 border-gray-200 w-24 rounded-lg p-1' >{job_time}</p>
                    </div>
                    <div >
                        <p className='text-gray-700 flex my-2 gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>

                            {address}
                        </p>
                        <p className='text-gray-700 flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {salary}
                        </p>
                    </div>


                </div>
                <Link to={`/jobdetails/${_id}`} className=" ms-4 mb-3 p-3  rounded-lg btn-info text-white w-32" >
                    View Details
                </Link>

            </div>


        </>
    );
};

export default FeaturedJobs;