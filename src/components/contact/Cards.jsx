"use client";
import React from "react";
import iconPhone from "@/assets/images/icon-phone.png";
import iconmail from "@/assets/images/icon-mail.png";
import iconlocation from "@/assets/images/icon-location.png";
import Image from "next/image";

export default function Cards() {
	const handleCall = () => {
		window.location.href = "tel:(+21) 547 885 6885";
	};
	const handleMail = () => {
		window.location.href = "mailto:hello@example.com";
	};
	const handleLocation = () => {
		window.open("https://maps.app.goo.gl/2yce7jTQhBqG7Prn8", "_blank");
	};

	return (
		<div className="container lg:px-0 px-5 pt-12 md:pt-16 lg:pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-6">
			<div className="bg-main/10 rounded-2xl p-6 text-center">
				<Image
					src={iconPhone}
					alt="Phone Icon"
					className="w-20 mx-auto -mt-16"
				/>
				<h5 className="text-2xl font-bold text-main pt-4 pb-2">Call</h5>
				<h6 className="font-medium">(+21) 547 885 6885</h6>
				<button
					onClick={handleCall}
					className="btn w-full mt-5 border !bg-background !text-accent hover:!bg-main hover:!text-background duration-200"
				>
					Get Call Back
				</button>
			</div>
			<div className="bg-main/10 rounded-2xl p-6 text-center">
				<Image
					src={iconmail}
					alt="Phone Icon"
					className="w-20 mx-auto -mt-16"
				/>
				<h5 className="text-2xl font-bold text-main pt-4 pb-2">
					Email
				</h5>
				<h6 className="font-medium">ollie@example.com</h6>
				<button
					onClick={handleMail}
					className="btn w-full mt-5  border !bg-background !text-accent hover:!bg-main hover:!text-background duration-200"
				>
					Enter Email
				</button>
			</div>
			<div className="bg-main/10 rounded-2xl p-6 text-center">
				<Image
					src={iconlocation}
					alt="Phone Icon"
					className="w-20 mx-auto -mt-16"
				/>
				<h5 className="text-2xl font-bold text-main pt-4 pb-2">
					Address
				</h5>
				<h6 className="font-medium">Bowery St, New York, USA</h6>
				<button
					onClick={handleLocation}
					className="btn w-full mt-5  border !bg-background !text-accent hover:!bg-main hover:!text-background duration-200"
				>
					View On Map
				</button>
			</div>
		</div>
	);
}
