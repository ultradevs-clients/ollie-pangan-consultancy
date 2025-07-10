"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import MaskedVideoDialog from "./MaskedVideoDialog";
export default function BannerCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const [sliderRef] = useKeenSlider({
		loop: true,

		created: (slider) => {
			setCurrentSlide(slider.track.details.rel);
		},
		slideChanged: (slider) => {
			setCurrentSlide(slider.track.details.rel);
		},
	});

	const slides = [
		{
			videoSrc: "/videos/video1.mp4",
		},
		{
			videoSrc: "/videos/video2.mp4",
		},
		{
			videoSrc: "/videos/video3.mp4",
		},
	];

	return (
		<div className="relative w-full ">
			<div
				ref={sliderRef}
				className="keen-slider rounded-2xl  h-[600px] overflow-hidden"
			>
				{slides.map((video, idx) => (
					<div
						key={idx}
						className={`keen-slider__slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${
							currentSlide === idx
								? "opacity-100 z-10"
								: "opacity-0 z-0"
						}`}
					>
						<MaskedVideoDialog videoSrc={video.videoSrc} />
					</div>
				))}
			</div>

			{/* Dotted bullet indicators */}

			<div className="w-max mx-auto pt-5 flex gap-2">
				{slides.map((_, idx) => (
					<div
						key={idx}
						className={`h-2 rounded-full transition-all duration-500 ${
							currentSlide === idx
								? "w-6 bg-main"
								: "w-2 bg-main/20"
						}`}
					/>
				))}
			</div>
		</div>
	);
}
