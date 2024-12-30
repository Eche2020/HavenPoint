import React from 'react'
import Heading from '../Components/common/Heading';
import Team from '../Components/home/Team';


const TeamPage = () => {
  return (
		<>
			<div style={{ margin: "8rem" }}>
				<Heading heading="Team" title="Home" subtitle="Team" />
				<Team />
			</div>
		</>
	);
}

export default TeamPage
