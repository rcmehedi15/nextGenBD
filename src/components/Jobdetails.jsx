import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachJob from './EachJob';

const Jobdetails = () => {
    const jobs = useLoaderData();
    return (
        <>
            <h1 className='container mx-auto text-4xl text-center mt-5 font-bold bg-blue-300 text-white rounded-md'>Job Details</h1>

            <div>
                {
                    jobs.map(job => <EachJob key={job._id} job={job}>

                    </EachJob> )
                }
            </div>
            
        </>
    );
};

export default Jobdetails;