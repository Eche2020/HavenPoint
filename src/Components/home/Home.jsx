import React, { useState } from 'react'
import Carousel from "./Carousel";
import Book from "./Book";
import About from "./About";
import Services from "./Service";
import Rooms from "./Rooms";
import Sliders from "./Sliders";
import Teams from "./Team";
import VideoPlayer from './VideoPlayer';
import Video from './Video';



const Home = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Carousel />
      <Book />
      <About />
      <VideoPlayer setPlayState={ setPlayState} />
      <Services />
      <Rooms />
      <Sliders />
      <Teams />   
      <Video playState={playState} setPlayState={setPlayState} />
    </>
  )
}

export default Home
