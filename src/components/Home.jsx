import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import Catagory from './Catagory';
import FeaturedJobs from './FeaturedJobs';
import HeroArea from './HeroArea';
const Home = () => {
    const jobs = useLoaderData();
   
    
    return (
        <>
            <section>
                <HeroArea></HeroArea>
                <Catagory></Catagory>


                <div className='text-center container mx-auto my-5'>
                    <h1 className='text-3xl font-bold '>Featured Jobs</h1>
                    <p className='text-gray-700 my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='container mx-auto my-5 '>
                    <div className=' grid grid-cols-2 container mx-auto gap-5'>
                    {
                        jobs.map(job => <FeaturedJobs key={job._id} job={job} >


                        </FeaturedJobs>)
                    }
                    </div>
                </div>

            </section>
        </>
    );
};

export default Home;