import React from "react";
import Heading from "../Components/common/Heading";
import CommonHeading from "../Components/common/CommonHeading";
import { contact } from "../Components/data/Data";

const ContactPage = () => {
	return (
		<>
			<Heading heading="Contact" title="Home" subtitle="Contact" />

			<div className="container-xxl py-5" style={{marginBottom: "5rem"}}>
				<div className="container">
					<CommonHeading
						heading="Contact Us"
						subtitle="Contact "
						title="For Any Query"
					/>
					<div className="row g-4">
						<div className="col-12">
							<div className="row gy-4">
								{contact.map((item, index) => (
									<div className="col-md-4" key={index}>
										<h6 className="section-title text-start text-primary text-uppercase">
											{item.title}
										</h6>
										<p>
											{item.icon}
											{item.email}
										</p>
									</div>
								))}
							</div>
						</div>
						<div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
							<iframe
								className="position-relative rounded w-100 h-100"
								src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63425.21624452932!2d3.322838001942059!3d6.51206263087812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1735515037984!5m2!1sen!2sng"
								frameBorder="0"
								style={{ minHeight: "350px", border: "0" }}
								allowFullScreen=""
								loading="lazy"
								aria-hidden="false"
								tabIndex="0"></iframe>
						</div>
						<div className="col-md-6">
							<div className="wow fadeInUp" data-wow-delay="0.2s">
								<form>
									<div className="row g-3">
										<div className="col-md-6">
											<div className="form-floating">
												<input
													type="text"
													className="form-control"
													id="name"
													placeholder="Your Name"
												/>
												<label htmlFor="name">Your Name</label>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-floating">
												<input
													type="email"
													className="form-control"
													id="email"
													placeholder="Your Email"
												/>
												<label htmlFor="email">Your Email</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating">
												<input
													type="text"
													className="form-control"
													id="subject"
													placeholder="Subject"
												/>
												<label htmlFor="subject">Subject</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating">
												<textarea
													className="form-control"
													placeholder="Leave a message here"
													id="message"
													style={{ height: "150px" }}></textarea>
												<label htmlFor="message">Message</label>
											</div>
										</div>
										<div className="col-12">
											<button
												className="btn btn-primary w-100 py-3"
												type="submit">
												Send Message
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactPage;
