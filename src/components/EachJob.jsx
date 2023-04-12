import React from 'react';
import { Link } from 'react-router-dom';

const EachJob = ({job}) => {
    const { description,responsibility,educational_Requirements,experiences,salary,job_title,phone,email,address} = job;
    return (
        <div>
            <div className='container mx-auto flex justify-between mt-8'>
                <div className='w-full'> 
                    <h1> <span className='font-bold'>Job Description : </span> {description}</h1>
                    <h1><span className='font-bold'>Job Responsibility: </span> {responsibility}</h1>
                    <h1 > <span className='font-bold'>Educational Requirements: </span>{educational_Requirements}</h1>
                    <h1><span className='font-bold'>Experiences: </span>{experiences}</h1>
                </div>
                <div className='bg-slate-300 p-12 rounded-md w-96 '>
                    <h1><span className='text-center font-bold'>Job Details</span></h1>
                    <p><span className='font-bold'>Salary: </span>{salary}</p>
                    <p><span className='font-bold'>Job Title :</span> {job_title}</p>
                    <h1><span className='font-bold'>Contact Information</span></h1>
                    <p><span className='font-bold'>Phone :</span> {phone}</p>
                    <p><span className='font-bold'>Email:</span> {email}</p>
                    <p className='mb-8 '><span className='font-bold'>Address: </span>{address}</p>
                <Link to='/jobapply' className='mt-4 p-4 rounded-lg btn-info text-white'>Apply Now</Link>

                </div>
            </div>
        </div>
    );
};

export default EachJob;