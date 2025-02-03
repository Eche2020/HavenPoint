import React from "react";
import "../../css/style.css";
import playIcon from "/images/play-icon.png";
import imgIcon from "/images/about-3.jpg";


const VideoPlayer = ({setPlayState}) => {
	return (
		<>
			<div className="container--xxl py-5">
				<div className="container">
					<div className="row g-5 align-items-center">
						<div className="col-lg-6">
							<h6 className="section-title text-start text-primary text-uppercase">
								Take a view
							</h6>
							<h1 className="mb-4">
								Havenpoint
								<span className="text-primary text-uppercase">Attractions</span>
							</h1>
							<p className="mb-4">
								Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
								Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
								sed stet lorem sit clita duo justo magna dolore erat amet
							</p>
						</div>
						<div className="col-lg-6 position-relative">
							<div className="row g-3">
								<div className="col-6 text-end img-icons">
									<img className="img-icon" src={imgIcon} alt="image-icon" />
									<img className="play-icon" src={playIcon} alt="play-icon" onClick={()=>{setPlayState(true)}} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default VideoPlayer;
