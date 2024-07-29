import React, { Component } from "react";
import Slider from "react-slick";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div onClick={onClick} className="slick-slider-prev">
			<RiArrowLeftSLine className="Prevbutton" />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className="slick-slider-next" onClick={onClick}>
			<RiArrowLeftSLine className="nxtbutton" />
		</div>
	);
}

function CustomArrows({ imgsource }) {
	const settings = {
		slidesToShow: 7,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		autoplay: true,
		speed: 1000,
		infinite: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1081,
				settings: {
					slidesToShow: 6,
				},
			},
			{
				breakpoint: 981,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 641,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 331,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};
	return (
		<div className="slider-container w-5/6 pt-1 max-3xl:w-full">
			<Slider {...settings}>
				{imgsource.map((Element) => (
					<div className="max-w-24">
						<Link to={"/"}>
							<img src={Element} alt="company logo" />
						</Link>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default CustomArrows;
