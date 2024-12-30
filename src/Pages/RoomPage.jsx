import React from 'react'
import Rooms from '../Components/home/Rooms';
import Heading from '../Components/common/Heading';

const RoomPage = () => {
  return (
		<>
			<div style={{ margin: "8rem" }}>
				<Heading heading="Room" title="Home" subtitle="Room" />
				<Rooms />
			</div>
		</>
	);
}

export default RoomPage
