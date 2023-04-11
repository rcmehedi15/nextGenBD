import React from 'react';
import { Link } from 'react-router-dom'
import Catagory from './Catagory';
const Home = () => {
    return (
        <>
            <section>
                <div className="min-h-screen bg-base-200 ">
                    <div className="container mx-auto  flex-col lg:flex-row-reverse flex  items-center">
                        <img src="./src/assets/man.png" className="" />
                        <div>
                            <h1 className="text-5xl font-bold">One Step <br  /> Closer To Your <br /> <span className='text-info'>
                            Dream Job</span></h1>
                            <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                            <button className="btn btn-info text-white">Get Started</button>
                        </div>
                    </div>
                </div>
                <Catagory></Catagory>
            </section>
        </>
    );
};

export default Home;