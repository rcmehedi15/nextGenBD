import React from 'react';

const HeroArea = () => {
    return (
        <>
            <div className="min-h-screen bg-base-200 ">
                <div className="container mx-auto  flex-col lg:flex-row-reverse flex  items-center">
                    <img src="https://raw.githubusercontent.com/rcmehedi15/nextGendata/main/man.png" className="" />
                    <div>
                        <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /> <span className='text-info'>
                            Dream Job</span></h1>
                        <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn btn-info text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroArea;