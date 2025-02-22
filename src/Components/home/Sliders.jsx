import React from "react";
import { testimonial } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/style.css";

const Sliders = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
	};
	return (
		<>
			<div
				className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn"
				data-wow-delay="0.1s">
				<div className="container">
					<div className="owl-carousel testimonial-carousel py-5 sliders">
						<Slider {...settings}>
							{testimonial.map((item, key) => (
								<div
									key={key}
									className="testimonial-item position-relative bg-white rounded overflow-hidden text-dark">
									<p className="text-dark">{item.description}</p>
									<div className="d-flex align-items-center">
										<img
											className="img-fluid flex-shrink-0 rounded"
											src={item.img}
											
										/>
										<div className="ps-3">
											<h6 className="fw-bold mb-1">{item.name}</h6>
											<small>{item.profession}</small>
										</div>
									</div>
									{item.icon}
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sliders;
