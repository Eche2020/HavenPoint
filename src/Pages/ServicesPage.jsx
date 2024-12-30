import React from 'react'
import Heading from '../Components/common/Heading';
import Service from '../Components/home/Service';
import Sliders from '../Components/home/Sliders';


const ServicesPage = () => {
  return (
		<>
			<div style={{ marginBottom: "8rem" }}>
				<Heading heading="Services" title="Home" subtitle="Services" />
				<Service />
				<Sliders />
			</div>
		</>
	);
}

export default ServicesPage
