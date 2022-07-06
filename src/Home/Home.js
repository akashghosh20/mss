import React from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import HeadTeachersSpeech from './HeadTeachersSpeech';
import Info from './Info';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <HeadTeachersSpeech></HeadTeachersSpeech>
            <Info></Info>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;