import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';


function App() {

  const [playState, setPlaystate]= useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer' />
        <Programs />
        <About playState={playState} setPlayState={setPlaystate} />

        <Title subTitle='Gallery' title='Campus Photo' />
        <Campus />
                <Title subTitle='TESTIMONIALs' title='What Student Says🧑🏻‍🎓' />
                <Testimonials/>
                <Title subTitle='Contact us' title='Get In Touch' />
                <Contact/>
                <Footer/>
      </div>
             <VideoPlayer playState={playState} setPlayState={setPlaystate} />
      </div>
  );
}








export default App

