import React from 'react'
import Heading from '../Components/common/Heading';
import About from '../Components/home/About';
import Team from "../Components/home/Team";



const AboutUs = () => {
  return (
		<>
			
			<Heading heading="About" title="Home" subtitle="About" />
			<About />
			<Team />
		</>
	);
}

export default AboutUs
