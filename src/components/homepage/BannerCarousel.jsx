"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import userImage from "@/assets/images/userImage.png";
import imageShape from "@/assets/images/bg-shape.png";
import MaskedVideoDialog from "./MaskedVideoDialog";
import Image from "next/image";
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

	// const slides = [
	// 	{
	// 		videoSrc: "/videos/video1.mp4",
	// 	},
	// 	{
	// 		videoSrc: "/videos/video2.mp4",
	// 	},
	// 	{
	// 		videoSrc: "/videos/video3.mp4",
	// 	},
	// ];

	const slides = [
		{
			imageSrc: userImage,
		},
		{
			imageSrc: userImage,
		},
		{
			imageSrc: userImage,
		},
	];

	return (
		<div className="relative w-full ">
			{/* <div
				ref={sliderRef}
				className="keen-slider rounded-2xl h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden"
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
			
				
			</div> */}
			<div ref={sliderRef} className="keen-slider">
				{slides.map((image, idx) => (
					<div key={idx} className="shape-div keen-slider__slide">
						<Image
							width={1000}
							height={1000}
							quality={100}
							src={image.imageSrc}
							alt="User Image"
							className="user-Image"
						/>
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
