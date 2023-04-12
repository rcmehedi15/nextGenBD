import React from 'react';
import { Link } from 'react-router-dom'
import Catagory from './Catagory';
import FeaturedJobs from './FeaturedJobs';
import HeroArea from './HeroArea';
const Home = () => {
    return (
        <>
            <section>
                <HeroArea></HeroArea>
                <Catagory></Catagory>
                <FeaturedJobs></FeaturedJobs>
            </section>
        </>
    );
};

export default Home;