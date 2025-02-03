import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/style.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";

import {
	Home,
	Booking,
	Testimonials,
	Team,
	AboutUs,
	Contact,
	PageNotFound,
	Room,
	Services,
} from "./Pages/index";
import Header from "./Components/common/Header";
import Footer from "./Components/common/Footer";

const App = () => {
	return (
		<>
			<div>
				<Router>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/booking" element={<Booking />} />
						<Route path="/testimonials" element={<Testimonials />} />
						<Route path="/team" element={<Team />} />
						<Route path="/about" element={<AboutUs />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/*" element={<PageNotFound />} />
						<Route path="/rooms" element={<Room />} />
						<Route path="/services" element={<Services />} />
					</Routes>
					<Footer />
				</Router>
			</div>
		</>
	);
};

export default App;
