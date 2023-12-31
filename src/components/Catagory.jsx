import React from 'react';
import FeaturedJobs from './FeaturedJobs';

const Catagory = () => {
    return (
        <>
            <section className='container mx-auto my-5'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold '>Job Category List</h1>
                    <p className='text-gray-700 my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='flex justify-between mx-auto items-center gap-10'>
                    <div className="card w-80 bg-base-200  ">
                        <img src="./src/assets/Icons/accounts.png" alt="" className='card-body bg-base-300 m-4 rounded-lg w-24' />
                        <div className="p-4">
                            <h2 className="card-title text-2xl">Account & Finance</h2>
                            <p className='text-gray-700'>00 Jobs Available</p>

                        </div>
                    </div>
                    <div className="card w-80 bg-base-200  ">
                        <img src="./src/assets/Icons/business.png" alt="" className='card-body bg-base-300 m-4 rounded-lg w-24' />
                        <div className="p-4">
                            <h2 className="card-title text-2xl">Creative Design</h2>
                            <p className='text-gray-700'>100+ Jobs Available</p>

                        </div>
                    </div>
                    <div className="card w-80 bg-base-200  ">
                        <img src="./src/assets/Icons/social-media.png" alt="" className='card-body bg-base-300 m-4 rounded-lg w-24' />
                        <div className="p-4">
                            <h2 className="card-title text-2xl">Marketing & Sales</h2>
                            <p className='text-gray-700'>150 Jobs Available</p>

                        </div>
                    </div>
                    <div className="card w-80 bg-base-200  ">
                        <img src="./src/assets/Icons/chip.png" alt="" className='card-body bg-base-300 m-4 rounded-lg w-24' />
                        <div className="p-4">
                            <h2 className="card-title text-2xl">Engineering Job</h2>
                            <p className='text-gray-700'>224 Jobs Available</p>

                        </div>
                    </div>
                </div>
            </section>
            

        </>
    );
};

export default Catagory;